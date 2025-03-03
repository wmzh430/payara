import { IButton } from "@/config/interface"
import classNames from "classnames"

export default function Button({
  label,
  type,
  disabled,
  shadow,
  onClick,
}: IButton) {
  const btnClass = classNames(
    "cursor-pointer rounded-x-small px-4 py-1 h-[40px] duration-100 hover:shadow-sm-light dark:hover:shadow-sm-dark",
    {
      "shadow-sm-light dark:shadow-sm-dark": shadow,
      "text-violet-50 dark:text-violet-700": type === "primary",
      "text-violet-700 dark:text-violet-300 border border-violet-700 dark:border-violet-300":
        type === "secondary",
      "bg-violet-300 dark:bg-violet-400": type === "primary" && disabled,
      "bg-orange-500 dark:bg-violet-50 hover:bg-orange-600 dark:hover:bg-violet-100":
        type === "primary" && !disabled,
      "bg-violet-400 dark:bg-gray-500": type === "secondary" && disabled,
      "bg-violet-100 dark:bg-gray-600 hover:bg-violet-100 dark:hover:bg-gray-700":
        type === "secondary" && !disabled,
    }
  )

  return (
    <button className={btnClass} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}
