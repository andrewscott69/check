import { DollarSign } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AccountSummary() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$0.00</div>
        <p className="text-xs text-muted-foreground">+$0.00 from last month</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Checking</span>
            <span className="font-medium">$0.00</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Savings</span>
            <span className="font-medium">$0.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

