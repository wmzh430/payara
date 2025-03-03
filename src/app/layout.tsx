import type { Metadata } from "next"
import { ThemeProvider } from "@/context/ThemeProvider"
import "@/assets/globals.css"

export const metadata: Metadata = {
  title: "Payara",
  description: "Payara v1.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-violet-50 dark:bg-gray-800 font-satoshi text-base`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
