import React from "react"
import classNames from "classnames"

export default function Icon({
  children,
  isActived,
  isDisabled,
}: {
  children: React.ReactElement
  isActived: boolean
  isDisabled?: boolean
}) {
  return (
    <div
      role="icon"
      className={classNames("p-1 rounded-pill transition", {
        "bg-violet-50 dark:bg-violet-200 text-violet-950 dark:text-violet-700":
          isActived,
        "bg-violet-700 dark:bg-violet-300 text-gray-100 dark:text-gray-700":
          !isActived,
        "opacity-30": isDisabled,
      })}
    >
      {children}
    </div>
  )
}
