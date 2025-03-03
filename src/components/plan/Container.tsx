import classNames from "classnames"
import React from "react"

export default function PlanCardContainer({
  children,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      className={classNames(
        "col-span-1 px-6 py-10 transition lg:duration-200 rounded-medium font-satoshi-light",
        isActive
          ? "bg-violet-700 text-gray-100 lg:scale-x-105 lg:scale-y-110 shadow-sm-light dark:shadow-sm-dark z-20"
          : "bg-violet-100 dark:bg-gray-700 text-violet-950 dark:text-gray-100 z-10"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
