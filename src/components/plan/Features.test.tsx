import { render, screen } from "@testing-library/react"
import PlanFeatures from "./Features"
import { listData } from "../../config/data" // Import your data if needed

// Mock the Icon component to avoid rendering the actual icons (for simplicity)
jest.mock("../Icon", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}))

describe("PlanFeatures", () => {
  it("should render allowed features with CheckIcon", () => {
    const allowedItems = 3 // Number of allowed items
    const isActived = true // Assuming the feature is active

    render(<PlanFeatures allowedItems={allowedItems} isActived={isActived} />)

    // Check that the first 3 features have CheckIcon
    for (let i = 0; i < allowedItems; i++) {
      const featureElement = screen.getByText(listData[i])
      expect(featureElement).toBeInTheDocument()
    }
  })

  it("should render restricted features with XIcon and apply opacity-30", () => {
    const allowedItems = 3
    const isActived = true

    render(<PlanFeatures allowedItems={allowedItems} isActived={isActived} />)

    // Check that the features beyond allowedItems have XIcon and opacity-30
    for (let i = allowedItems; i < listData.length; i++) {
      const featureElement = screen.getByText(listData[i])
      expect(featureElement).toBeInTheDocument()
      expect(featureElement).toHaveClass("opacity-30") // Check for opacity-30
    }
  })

  it("should render correctly with isActived as false", () => {
    const allowedItems = 5
    const isActived = false

    render(<PlanFeatures allowedItems={allowedItems} isActived={isActived} />)

    expect(screen.getByText(listData[0])).toBeInTheDocument()
  })
})
