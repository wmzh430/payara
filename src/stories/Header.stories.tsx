import type { Meta, StoryObj } from "@storybook/react"
import Header from "@/components/Header"
import { ThemeProvider } from "next-themes"

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="light">
    {children}
  </ThemeProvider>
)

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const toggleTheme: Story = {}
