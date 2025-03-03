export interface IButton {
  label: string
  type: string
  disabled?: boolean
  shadow?: boolean
  onClick?: () => void
}

export interface ITitle {
  className?: string
  type: string
  value: string
}

export interface IPlanData {
  title: string
  content: string
  isActive: boolean
  price: number
  allowedItems: number
}
