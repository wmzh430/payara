import type { Meta, StoryObj } from "@storybook/react"
import PlanPrice from "@/components/plan/Price"

const meta = {
  title: "Components/PlanPrice",
  component: PlanPrice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlanPrice>

export default meta

// Define the story template
type Story = StoryObj<typeof PlanPrice>

// Default story
export const Freebie: Story = {
  args: {
    type: "Freebie",
    isActived: true,
  },
}

// Story for Professional plan
export const Professional: Story = {
  args: {
    type: "Professional",
    isActived: true,
  },
}

// Story for Enterprise plan
export const Enterprise: Story = {
  args: {
    type: "Enterprise",
    isActived: true,
  },
}
