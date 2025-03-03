import { ITitle } from "@/config/interface"
import classNames from "classnames"

export default function Title({ className, type, value }: ITitle) {
  const txtClass = classNames(
    {
      "text-l sm:text-xl text-violet-950 dark:text-gray-50": type === "heading",
      "text-l sm:text-xl text-violet-500 dark:text-violet-800":
        type === "heading-violet",
      "text-2xl sm:text-3xl text-gray-500 dark:text-gray-400":
        type === "subHeading",
    },
    className
  )

  return <h2 className={txtClass}>{value}</h2>
}
