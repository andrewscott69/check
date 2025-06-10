"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, LogOut, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type UserData = {
  name: string
  email: string
}

export function UserNav() {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/dashboard")
        const data = await res.json()
        setUserData(data)
      } catch (error) {
        console.error("Failed to load user info:", error)
      }
    }

    fetchUser()
  }, [])

  const getInitials = (name?: string) => {
    if (!name) return "JD"
    const parts = name.split(" ")
    const initials = parts[0][0] + (parts[1]?.[0] ?? "")
    return initials.toUpperCase()
  }

  const handleLogout = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })
      if (response.ok) {
        router.push("/u/login")
      }
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt={userData?.name || "User"} />
            <AvatarFallback>{getInitials(userData?.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userData?.name || "Loading..."}</p>
            <p className="text-xs leading-none text-muted-foreground">{userData?.email || ""}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/u/settings">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/u/cards">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Cards</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/u/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          {loading ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
