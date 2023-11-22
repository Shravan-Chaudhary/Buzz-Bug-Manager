import React from "react"
import MainNavMarketing from "./_components/MainNavMarketing"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="grainy min-h-screen">
      <MainNavMarketing />
      <main>{children}</main>
    </div>
  )
}
