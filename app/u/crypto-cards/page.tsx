"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, DollarSign, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MobileNav } from "@/components/mobile-nav";
import { UserNav } from "@/components/user-nav";
import { CryptoCard, CreateCardButton } from "@/components/crypto-card";
import { CreateCardModal } from "@/components/create-card-modal";
import { FundCardModal } from "@/components/fund-card-modal";

// Define interfaces before usage
interface CryptoCard {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  currencyType: "USDT" | "BTC" | "SOL"; // Narrower type
  balance: number;
}

interface Card {
  id: string;
  name: string;
  cardNumber: string;
  expiryDate: string;
  currencyType: "USDT" | "BTC" | "SOL"; // Match the expected type
  balance: number;
}

interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: "DEPOSIT" | "WITHDRAWAL";
  currencyType: "USDT" | "BTC" | "SOL";
}

interface CreateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (card: Card) => void;
}

// Default new card structure
const newCard: Card = {
  id: "some-id",
  name: "New Card",
  cardNumber: "**** **** **** 1234",
  expiryDate: "01/26",
  currencyType: "BTC",
  balance: 0.0,
};

export default function CryptoCardsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isFundModalOpen, setIsFundModalOpen] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleCreateCard = (newCard: Card) => {
    setCards([...cards, newCard]);
  };

  const handleFundCard = (card: Card) => {
    setSelectedCard(card);
    setIsFundModalOpen(true);
  };

  const handleFreezeCard = (card: Card) => {
    alert(`Card ${card.name} has been frozen.`);
  };

  const handleDeleteCard = (card: Card) => {
    if (confirm(`Are you sure you want to delete ${card.name}?`)) {
      setCards(cards.filter((c) => c.id !== card.id));
    }
  };

  const handleFundSuccess = (transaction: Transaction) => {
    if (!selectedCard) {
      console.error("No card selected");
      return;
    }

    // Update card balance
    setCards(
      cards.map((card) =>
        card.id === selectedCard.id ? { ...card, balance: card.balance + transaction.amount } : card
      )
    );

    // Add transaction to history
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden md:flex md:gap-2 lg:gap-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <DollarSign className="h-6 w-6" />
            <span>BankApp</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link href="/cards" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Cards
          </Link>
          <Link href="/crypto-cards" className="text-sm font-medium text-primary">
            Crypto Cards
          </Link>
          <Link href="/transactions" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Transactions
          </Link>
          <Link href="/settings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Settings
          </Link>
        </nav>
        <MobileNav />
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8 md:w-80" />
            </div>
          </form>
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Crypto Cards</h1>
            <p className="text-muted-foreground">Manage your cryptocurrency cards and add funds.</p>
          </div>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create New Card
          </Button>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Crypto Cards</CardTitle>
              <CardDescription>Each card can only hold one type of cryptocurrency. Create a new card for different cryptocurrencies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                  <CryptoCard key={card.id} card={card} onFund={handleFundCard} onFreeze={handleFreezeCard} onDelete={handleDeleteCard} />
                ))}
                <CreateCardButton onClick={() => setIsCreateModalOpen(true)} />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* <CreateCardModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSuccess={handleCreateCard} />
      <FundCardModal isOpen={isFundModalOpen} onClose={() => setIsFundModalOpen(false)} card={selectedCard} onSuccess={handleFundSuccess} /> */}
    </div>
  );
}