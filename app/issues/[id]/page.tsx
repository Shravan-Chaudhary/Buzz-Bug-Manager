import IssueStatusBadge from '@/components/IssueStatusBadge'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { TypographyH2 } from '@/components/typography/typographyH2'
import { TypographyLead } from '@/components/typography/typographyLead'
import { TypographyP } from '@/components/typography/typographyP'
import { Card } from '@/components/ui/card'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!issue) {
    notFound()
  }

  return (
    <>
      <MaxWidthWrapper>
        <TypographyH2>{issue.title}</TypographyH2>
        <div className="flex gap-3 md:gap-4 my-3">
          <IssueStatusBadge status={issue.status} />
          <TypographyLead>{issue.createdAt.toDateString()}</TypographyLead>
        </div>
        <Card className="my-6 p-2 px-4 flex items-center">
          <div className="flex items-center ">
            <TypographyP>{issue.description}</TypographyP>
          </div>
        </Card>
      </MaxWidthWrapper>
    </>
  )
}

export default IssueDetailPage
