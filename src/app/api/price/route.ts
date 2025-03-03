import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { type, period } = await req.json()

  // Price mapping
  const priceMap: Record<string, number> = {
    Freebie: 0,
    Professional: 25,
    Enterprise: 100,
  }

  // Get the price based on type, defaulting to 0
  const price = priceMap[type] || 0

  // Handle period and calculate month count
  const monthCount = period === "month" ? 1 : period === "year" ? 12 : 0

  // If period is invalid, return an error message
  if (monthCount === 0) {
    return NextResponse.json({ error: "Invalid period" }, { status: 400 })
  }

  // Return the calculated price
  return NextResponse.json(price * monthCount)
}
