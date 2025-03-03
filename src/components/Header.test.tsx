import { render, screen, fireEvent } from "@testing-library/react"
import { useTheme } from "next-themes"
import Header from "./Header"

// Mock useTheme from next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}))

describe("Header Component", () => {
  it("should render the sun icon when in dark mode", () => {
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
    })

    render(<Header />)

    expect(screen.getByTestId("sun-icon")).toHaveClass("scale-100")
    expect(screen.getByTestId("moon-icon")).toHaveClass("scale-0")
  })

  it("should render the moon icon when in light mode", () => {
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    })

    render(<Header />)

    expect(screen.getByTestId("sun-icon")).toHaveClass("scale-0")
    expect(screen.getByTestId("moon-icon")).toHaveClass("scale-100")
  })

  it("should toggle the theme on click", () => {
    const setThemeMock = jest.fn()
    ;(useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: setThemeMock,
    })

    render(<Header />)
    fireEvent.click(screen.getByTestId("theme-toggle"))

    expect(setThemeMock).toHaveBeenCalledWith("light")
  })
})
