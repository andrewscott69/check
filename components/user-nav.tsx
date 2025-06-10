"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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


export function UserNav() {
  const [loading, setLoading] = useState(false);
  // const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const fetchDashboard = async () => {
  //     try {
  //       const res = await fetch("/api/dashboard");
  //       const data = await res.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error("Error loading dashboard:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDashboard();
  // }, []);


  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/u/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none"></p> 
            {/* {userData.email} */}
            <p className="text-xs leading-none text-muted-foreground"></p>
            {/* {userData.email} */}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/cards">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Cards</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <span  onClick={handleLogout}  className="flex ">
            <LogOut className="mr-2 h-4 w-4" />
            {loading ? "Logging out..." : "Logout"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

