"use client"

import type React from "react"

import { CreditCard, Eye, EyeOff, MoreHorizontal, Plus } from "lucide-react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface CardType {
  id: string
  name: string
  number: string
  expiry: string
  type: string
  color?: string
}

interface CardsListProps {
  cards?: CardType[]
  expanded?: boolean
}

// Add this style block for the clip path
const styles = `
  .clip-wallet-card {
    clip-path: polygon(0 15%, 100% 15%, 100% 100%, 0% 100%);
  }
`

function DraggableCard({
  card,
  index,
  isStacked,
  isDragged,
  onDragStart,
  onDragEnd,
  stackOffset,
}: {
  card: CardType
  index: number
  isStacked: boolean
  isDragged: boolean
  onDragStart: (id: string) => void
  onDragEnd: () => void
  stackOffset: number
}) {
  const [showNumber, setShowNumber] = useState(false)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const maskCardNumber = (number: string) => {
    return `•••• •••• •••• ${number.slice(-4)}`
  }

  const formatCardNumber = (number: string) => {
    return number.replace(/(.{4})/g, "$1 ").trim()
  }

  const getCardGradient = (color?: string) => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-blue-700"
      case "purple":
        return "from-purple-500 to-purple-700"
      case "green":
        return "from-green-500 to-green-700"
      case "red":
        return "from-red-500 to-red-700"
      default:
        return "from-gray-700 to-gray-900"
    }
  }

  const getCardIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "visa":
        return <div className="text-white font-bold text-lg">VISA</div>
      case "mastercard":
        return (
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
          </div>
        )
      case "amex":
        return <div className="text-white font-bold text-sm">AMEX</div>
      case "discover":
        return <div className="text-white font-bold text-sm">DISC</div>
      default:
        return <CreditCard className="h-5 w-5 text-white" />
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isStacked) return

    setIsDragging(true)
    onDragStart(card.id)

    const startX = e.clientX - dragPosition.x
    const startY = e.clientY - dragPosition.y

    const handleMouseMove = (e: MouseEvent) => {
      setDragPosition({
        x: e.clientX - startX,
        y: e.clientY - startY,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)

      // Check if card is dragged far enough to be "pulled out"
      if (Math.abs(dragPosition.x) > 100 || Math.abs(dragPosition.y) > 100) {
        onDragEnd()
      } else {
        // Snap back to wallet
        setDragPosition({ x: 0, y: 0 })
      }

      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const cardStyle = isStacked
    ? {
        transform: `translate(${dragPosition.x}px, ${dragPosition.y + stackOffset}px) ${
          isDragging ? "rotate(5deg) scale(1.05)" : ""
        }`,
        zIndex: isDragged ? 50 : 10 + index,
        transition: isDragging ? "none" : "all 0.3s ease",
        opacity: isStacked ? 0.95 : 1, // Slightly dim cards in wallet
        height: isStacked ? "85%" : "100%", // Make cards in wallet slightly shorter to enhance "inside" look
        boxShadow: isStacked ? "0 -2px 5px rgba(0,0,0,0.2)" : "", // Shadow at top of card for depth
      }
    : {
        transform: "none",
        zIndex: 1,
        transition: "all 0.3s ease",
      }

  return (
    <div
      ref={cardRef}
      className={`absolute w-72 rounded-xl bg-gradient-to-br ${getCardGradient(card.color)} p-6 text-white shadow-lg cursor-pointer select-none ${
        isStacked ? "hover:shadow-xl clip-wallet-card" : "h-44"
      } ${isDragging ? "shadow-2xl" : ""}`}
      style={cardStyle}
      onMouseDown={handleMouseDown}
    >
      {/* Card background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium opacity-90">{card.name}</div>
          {!isStacked && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNumber(!showNumber)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                {showNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 rounded-full hover:bg-white/20 transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Card Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit Card</DropdownMenuItem>
                  <DropdownMenuItem>View Transactions</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete Card</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>

        {/* Card number */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-lg font-mono tracking-wider mb-2">
            {showNumber ? formatCardNumber(card.number) : maskCardNumber(card.number)}
          </div>
          {!isStacked && <div className="text-sm opacity-75 mb-2">Balance: $2,450.00</div>}
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between">
          <div className="text-sm">
            <div className="opacity-75 text-xs">EXPIRES</div>
            <div className="font-medium">{card.expiry}</div>
          </div>
          <div className="flex items-center">{getCardIcon(card.type)}</div>
        </div>
      </div>

      {/* Drag hint for stacked cards */}
      {isStacked && !isDragging && (
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 rounded-xl transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="text-white/80 text-sm font-medium">Drag to use</div>
        </div>
      )}
    </div>
  )
}

export function CardsList({ cards = [], expanded = false }: CardsListProps) {
  const [draggedCard, setDraggedCard] = useState<string | null>(null)
  const [pulledCards, setPulledCards] = useState<Set<string>>(new Set())

  const handleDragStart = (cardId: string) => {
    setDraggedCard(cardId)
  }

  const handleDragEnd = () => {
    if (draggedCard) {
      setPulledCards((prev) => new Set([...prev, draggedCard]))
      setDraggedCard(null)
    }
  }

  const handleReturnToWallet = (cardId: string) => {
    setPulledCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(cardId)
      return newSet
    })
  }

  // If no cards, show the empty state
  if (cards.length === 0) {
    return (
      <div className="relative flex flex-col items-center justify-center  p-10 text-center backdrop-blur-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-lg hover:shadow-gray-100/50">
        {/* Background decoration */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />

        {/* Main content - all centered */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200/80 shadow-sm mb-3 transition-transform duration-300 hover:scale-105">
            <CreditCard className="h-6 w-6 text-gray-500" />
          </div>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">No cards added yet</h3>
          <p className="text-xs text-gray-600 mb-4">Start by adding your first card</p>

          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add card
          </Button>
        </div>
      </div>
    )
  }

  const stackedCards = cards.filter((card) => !pulledCards.has(card.id))
  const pulledCardsArray = cards.filter((card) => pulledCards.has(card.id))

  // If there are cards, show the wallet with draggable cards
  return (
    <div className="space-y-8">
      <style jsx>{styles}</style>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Your Wallet</h2>
        <Button size="sm" className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add Card
        </Button>
      </div>

      {/* Wallet with stacked cards */}
      <div className="relative mx-auto w-80 h-64">
        {/* Wallet back layer (bottom) */}
        <div className="absolute inset-0 translate-y-2 rounded-2xl bg-amber-950 shadow-2xl"></div>

        {/* Wallet main body */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 shadow-2xl border border-amber-700/50 overflow-hidden">
          {/* Leather texture overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-800/30 via-transparent to-amber-950/50" />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Wallet stitching */}
          <div className="absolute inset-x-0 top-0 h-1 bg-amber-600/30"></div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-600/30"></div>
          <div className="absolute inset-y-0 left-0 w-1 bg-amber-600/30"></div>
          <div className="absolute inset-y-0 right-0 w-1 bg-amber-600/30"></div>

          {/* Wallet inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_5px_15px_rgba(0,0,0,0.4)] rounded-2xl"></div>
        </div>

        {/* Wallet card slots */}
        <div className="absolute top-6 left-4 right-4 bottom-4 rounded-lg bg-amber-950/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
          {/* Card slot dividers */}
          <div className="absolute top-1/4 inset-x-0 h-px bg-amber-800/30"></div>
          <div className="absolute top-2/4 inset-x-0 h-px bg-amber-800/30"></div>
          <div className="absolute top-3/4 inset-x-0 h-px bg-amber-800/30"></div>

          {/* Stacked cards inside wallet */}
          <div className="absolute top-2 left-2 right-2 bottom-2">
            {stackedCards.map((card, index) => (
              <DraggableCard
                key={card.id}
                card={card}
                index={index}
                isStacked={true}
                isDragged={draggedCard === card.id}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                stackOffset={-index * 16} // Increased spacing between cards
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pulled out cards */}
      {pulledCardsArray.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-700">Active Cards</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pulledCardsArray.map((card) => (
              <div key={card.id} className="relative">
                <DraggableCard
                  card={card}
                  index={0}
                  isStacked={false}
                  isDragged={false}
                  onDragStart={() => {}}
                  onDragEnd={() => {}}
                  stackOffset={0}
                />
                <button
                  onClick={() => handleReturnToWallet(card.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full text-xs hover:bg-gray-700 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
