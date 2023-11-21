import React from "react"
import MainNav from "./_components/MainNav"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="grainy min-h-screen">
      <MainNav />
      <main>{children}</main>
    </div>
  )
}
