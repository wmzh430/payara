import { render, screen, fireEvent } from "@testing-library/react"
import Button from "./Button"

describe("Button Component", () => {
  it("should render the button with the correct label", () => {
    render(<Button label="Get Started Now" type="primary" />)
    expect(
      screen.getByRole("button", { name: "Get Started Now" })
    ).toBeInTheDocument()
  })

  it("should apply correct styles for primary button", () => {
    render(<Button label="Primary" type="primary" />)
    const button = screen.getByRole("button", { name: "Primary" })
    expect(button).toHaveClass("text-violet-50 dark:text-violet-700")
  })

  it("should apply correct styles for secondary button", () => {
    render(<Button label="Secondary" type="secondary" />)
    const button = screen.getByRole("button", { name: "Secondary" })
    expect(button).toHaveClass("text-violet-700 dark:text-violet-300")
  })

  it("should be disabled when disabled prop is true", () => {
    render(<Button label="Disabled" type="primary" disabled />)
    const button = screen.getByRole("button", { name: "Disabled" })
    expect(button).toBeDisabled()
  })

  it("should call onClick handler when clicked", () => {
    const onClick = jest.fn()
    render(<Button label="Get Started Now" type="primary" onClick={onClick} />)

    const button = screen.getByRole("button", { name: "Get Started Now" })
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("should not call onClick when disabled", () => {
    const onClick = jest.fn()
    render(
      <Button label="Disabled" type="primary" disabled onClick={onClick} />
    )

    const button = screen.getByRole("button", { name: "Disabled" })
    fireEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })
})
