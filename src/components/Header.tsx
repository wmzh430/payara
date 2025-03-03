"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import classNames from "classnames"

export default function Header() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex justify-end mb-2 sm:mb-0">
      <div
        data-testid="theme-toggle"
        className="flex justify-center items-center relative cursor-pointer"
        onClick={toggleTheme}
      >
        <Sun
          data-testid="sun-icon"
          className={classNames("h-5 w-5 transition-all", {
            "rotate-0 scale-100": theme === "dark",
            "rotate-90 scale-0": theme !== "dark",
          })}
        />
        <Moon
          data-testid="moon-icon"
          className={classNames("absolute h-5 w-5 transition-all", {
            "rotate-0 scale-100": theme === "light",
            "rotate-90 scale-0": theme !== "light",
          })}
        />
      </div>
    </div>
  )
}
