import React from "react"
import MainNavDashboard from "./_components/MainNavDashboard"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <MainNavDashboard />
      <main className="flex-1">{children}</main>
    </>
  )
}
