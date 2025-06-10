import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, XCircle, Eye } from "lucide-react"

interface TransactionStatusCardProps {
  transaction: {
    id: string
    amount: number
    fee: number
    status: string
    transferType: string
    recipient: string
    estimatedArrival: string
    requiresApproval?: boolean
    createdAt: string
  }
}

export function TransactionStatusCard({ transaction }: TransactionStatusCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "processing":
        return <Clock className="h-5 w-5 text-blue-600" />
      case "pending":
        return <Eye className="h-5 w-5 text-yellow-600" />
      case "failed":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "failed":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusMessage = (status: string, requiresApproval?: boolean) => {
    if (requiresApproval && status.toLowerCase() === "pending") {
      return "Your transaction is pending admin approval. This may take 1-2 business days."
    }

    switch (status.toLowerCase()) {
      case "completed":
        return "Your transfer has been completed successfully."
      case "processing":
        return "Your transfer is currently being processed."
      case "pending":
        return "Your transfer is pending and will be processed shortly."
      case "failed":
        return "Your transfer failed. Please contact support."
      default:
        return "Transaction status unknown."
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getStatusIcon(transaction.status)}
            <CardTitle className="text-lg">Transfer Status</CardTitle>
          </div>
          <Badge className={getStatusColor(transaction.status)}>
            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
          </Badge>
        </div>
        <CardDescription>Transaction ID: {transaction.id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {getStatusMessage(transaction.status, transaction.requiresApproval)}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Amount</p>
            <p className="font-semibold">${transaction.amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Fee</p>
            <p className="font-semibold">${transaction.fee.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Recipient</p>
            <p className="font-semibold">{transaction.recipient}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Est. Arrival</p>
            <p className="font-semibold">{transaction.estimatedArrival}</p>
          </div>
        </div>

        {transaction.requiresApproval && (
          <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium">Security Review Required</p>
              <p>Large transfers require a security review for security purposes.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
