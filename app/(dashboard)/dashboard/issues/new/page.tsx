import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import React from "react"
import IssueForm from "../_components/IssueForm"
import { TypographyH2 } from "@/components/typography/typographyH2"

const NewIssuePage = () => {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col gap-3">
        <TypographyH2>Create New Issue</TypographyH2>
        <IssueForm />
      </MaxWidthWrapper>
    </>
  )
}

export default NewIssuePage
