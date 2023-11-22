import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Link
        href={"/dashboard/issues/new"}
        className={buttonVariants({
          variant: "default",
          size: "lg",
        })}
      >
        New Issue
      </Link>
    </div>
  )
}

export default IssueActions
