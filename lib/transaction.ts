// types/transaction.ts
export enum TransactionStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
  }
  
  export enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL",
    TRANSFER = "TRANSFER",
    PAYMENT = "PAYMENT",
    REFUND = "REFUND",
  }
  
  export enum CurrencyType {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    BTC = "BTC",
    ETH = "ETH",
  }
  
  export interface Transaction {
    id: string
    userId: string
    cardId?: string | null
    type: TransactionType
    amount: number
    fee: number
    status: TransactionStatus
    currencyType: CurrencyType
    accountName: string
    description?: string | null
    txHash?: string | null
    createdAt: string | Date
    updatedAt: string | Date
  }
  
