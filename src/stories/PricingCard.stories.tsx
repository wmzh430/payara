import type { Meta, StoryObj } from "@storybook/react"
import PricingCard from "../components/PricingCard"
import { planData } from "@/config/data"

const meta = {
  title: "Components/PricingCard",
  component: PricingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PricingCard>

export default meta

// Define the story template
type Story = StoryObj<typeof PricingCard>

// Default story
export const Freebie: Story = {
  args: {
    data: planData[0],
    index: 0,
    activeId: 0,
    currentPlan: 0,
    setCurrentPlan: (val: number) => console.log(`Current plan set to: ${val}`),
  },
}

// Story for Professional plan
export const Professional: Story = {
  args: {
    data: planData[1],
    index: 1,
    activeId: 1,
    currentPlan: 1,
    setCurrentPlan: (val: number) => console.log(`Current plan set to: ${val}`),
  },
}

// Story for Enterprise plan
export const Enterprise: Story = {
  args: {
    data: planData[2],
    index: 2,
    activeId: 2,
    currentPlan: 2,
    setCurrentPlan: (val: number) => console.log(`Current plan set to: ${val}`),
  },
}
