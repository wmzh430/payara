import { http, HttpResponse } from "msw"

interface IProps {
  type: string
  period: string
}

export const handlers = [
  http.post("/api/price", async ({ request }) => {
    const { type, period } = (await request.json()) as IProps

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

    return HttpResponse.json(price * monthCount)
  }),
]
