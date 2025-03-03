import { render, screen } from "@testing-library/react"
import PlanPrice from "./Price"
import { SWRConfig } from "swr"

// SWR needs a revalidation-free wrapper for proper testing
const renderWithSWR = (ui: React.ReactElement) => {
  return render(
    <SWRConfig value={{ provider: () => new Map() }}>{ui}</SWRConfig>
  )
}

describe("PlanPrice Component", () => {
  it("should display loading state initially", () => {
    renderWithSWR(<PlanPrice type="Freebie" isActived={true} />)
    expect(screen.getByText("-")).toBeInTheDocument()
  })

  it("should apply correct class when not active", () => {
    renderWithSWR(<PlanPrice type="Enterprise" isActived={false} />)
    expect(screen.getByText("/ month")).toHaveClass(
      "text-gray-700 dark:text-gray-100"
    )
  })
})
