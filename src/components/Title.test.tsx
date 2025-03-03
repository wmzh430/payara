import { render, screen } from "@testing-library/react"
import Title from "./Title"
import "@testing-library/jest-dom"

describe("Title Component", () => {
  it('should render a heading with correct class when type is "heading"', () => {
    render(<Title type="heading" value="Main Heading" />)

    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("Main Heading")
    expect(heading).toHaveClass(
      "text-l",
      "sm:text-xl",
      "text-violet-950",
      "dark:text-gray-50"
    )
  })

  it('should render a heading-violet with correct class when type is "heading-violet"', () => {
    render(<Title type="heading-violet" value="Violet Heading" />)

    const headingViolet = screen.getByRole("heading", { level: 2 })
    expect(headingViolet).toHaveTextContent("Violet Heading")
    expect(headingViolet).toHaveClass(
      "text-l",
      "sm:text-xl",
      "text-violet-500",
      "dark:text-violet-800"
    )
  })

  it('should render a subHeading with correct class when type is "subHeading"', () => {
    render(<Title type="subHeading" value="Subheading Title" />)

    const subHeading = screen.getByRole("heading", { level: 2 })
    expect(subHeading).toHaveTextContent("Subheading Title")
    expect(subHeading).toHaveClass(
      "text-2xl",
      "sm:text-3xl",
      "text-gray-500",
      "dark:text-gray-400"
    )
  })

  it("should apply additional className if provided", () => {
    render(
      <Title
        type="heading"
        value="Custom Class Heading"
        className="custom-class"
      />
    )

    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveClass("custom-class")
  })
})
