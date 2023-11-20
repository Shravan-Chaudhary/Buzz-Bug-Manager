import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import React from "react"
import IssueForm from "@/app/issues/_components/IssueForm"
import { TypographyH2 } from "@/components/typography/typographyH2"
import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!issue) {
    notFound()
  }

  return (
    <>
      <MaxWidthWrapper className="flex flex-col gap-3">
        <TypographyH2>Edit Issue</TypographyH2>
        <IssueForm issue={issue} />
      </MaxWidthWrapper>
    </>
  )
}

export default EditIssuePage
