import type { Meta, StoryObj } from "@storybook/react"
import PlanFeatures from "@/components/plan/Features"

const meta = {
  title: "Components/PlanFeatures",
  component: PlanFeatures,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlanFeatures>

export default meta

// Define the story template
type Story = StoryObj<typeof PlanFeatures>

export const Features: Story = {}
