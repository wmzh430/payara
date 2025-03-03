import { render, screen } from "@testing-library/react"
import Icon from "./Icon"
import { CheckIcon, XIcon } from "lucide-react"

describe("Icon Component", () => {
  it("should render with 'bg-violet-50' when isActived is true", () => {
    render(
      <Icon isActived={true} isDisabled={false}>
        <CheckIcon />
      </Icon>
    )

    const iconWrapper = screen.getByRole("icon")
    // Check if the bg-violet-50 class is applied
    expect(iconWrapper).toHaveClass("bg-violet-50")
    expect(iconWrapper).toHaveClass("text-violet-950")
  })

  it("should render with 'bg-violet-700' when isActived is false", () => {
    render(
      <Icon isActived={false} isDisabled={false}>
        <XIcon />
      </Icon>
    )

    const iconWrapper = screen.getByRole("icon")
    // Check if the bg-violet-700 class is applied
    expect(iconWrapper).toHaveClass("bg-violet-700")
    expect(iconWrapper).toHaveClass("text-gray-100")
  })

  it("should apply 'opacity-30' when isDisabled is true", () => {
    render(
      <Icon isActived={true} isDisabled={true}>
        <CheckIcon />
      </Icon>
    )

    const iconWrapper = screen.getByRole("icon")
    // Check if the opacity-30 class is applied
    expect(iconWrapper).toHaveClass("opacity-30")
  })
})
