"use client";

import { useState } from "react";
import { CreditCard, MoreHorizontal, Plus } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Currency colors and icons
const CURRENCY_COLORS = {
  BTC: "bg-gradient-to-r from-orange-500 to-yellow-500",
  USDT: "bg-gradient-to-r from-green-500 to-emerald-500",
  SOL: "bg-gradient-to-r from-purple-500 to-indigo-500",
};

// Cartoonish card design elements
const CARD_PATTERNS = {
  BTC: (
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="btc-pattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
            <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#btc-pattern)" />
      </svg>
    </div>
  ),
  USDT: (
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="usdt-pattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(30)">
            <circle cx="30" cy="30" r="15" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#usdt-pattern)" />
      </svg>
    </div>
  ),
  SOL: (
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sol-pattern" patternUnits="userSpaceOnUse" width="70" height="70">
            <path d="M35,0 L70,35 L35,70 L0,35 Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sol-pattern)" />
      </svg>
    </div>
  ),
};

interface CryptoCardProps {
  card: {
    id: string;
    name: string;
    cardNumber: string;
    expiryDate: string;
    currencyType: "BTC" | "USDT" | "SOL";
    balance: number;
  };
  onFund: (card: any) => void;
  onFreeze: (card: any) => void;
  onDelete: (card: any) => void;
}

export function CryptoCard({ card, onFund, onFreeze, onDelete }: CryptoCardProps) {
  return (
    <div className="group relative">
      <Card className="overflow-hidden h-48 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent className={`p-0 ${CURRENCY_COLORS[card.currencyType] || "bg-gradient-to-r from-blue-500 to-cyan-500"} text-white h-full relative`}>
          {/* Cartoonish pattern background */}
          {CARD_PATTERNS[card.currencyType]}
          
          <div className="flex h-full flex-col justify-between p-4 relative z-10">
            <div className="flex justify-between">
              <div className="font-semibold">{card.name}</div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white opacity-70 hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Card options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Card Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onFund(card)} className="fund-card-button">Fund Card</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onFreeze(card)}>Freeze Card</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onDelete(card)}>Delete Card</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                <span className="text-lg font-bold">{card.cardNumber}</span>
              </div>
              <div className="flex justify-between">
                <div className="text-sm opacity-80">Expires: {card.expiryDate}</div>
                <div className="text-sm font-semibold uppercase">{card.currencyType}</div>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between">
                <span className="opacity-80">Balance</span>
                <span className="font-semibold">{card.balance} {card.currencyType}</span>
              </div>
            </div>
            
            {/* Cartoonish chip */}
            <div className="absolute top-12 left-4 h-8 w-12 rounded-md bg-yellow-300 bg-opacity-70 border-2 border-yellow-400">
              <div className="absolute top-1 left-1 h-1 w-8 bg-yellow-200 rounded-full"></div>
              <div className="absolute top-3 left-1 h-1 w-6 bg-yellow-200 rounded-full"></div>
              <div className="absolute top-5 left-1 h-1 w-4 bg-yellow-200 rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CreateCardButton({ onClick }: { onClick: () => void }) {
  return (
    <Button 
      variant="outline" 
      className="h-48 w-full border-dashed flex flex-col items-center justify-center gap-2 create-card-button transition-all duration-300 hover:bg-primary/5"
      onClick={onClick}
    >
      <Plus className="h-8 w-8" />
      <span>Create New Card</span>
    </Button>
  );
}
