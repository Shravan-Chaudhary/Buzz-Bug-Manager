import IssueStatusBadge from '@/components/IssueStatusBadge'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { TypographyH2 } from '@/components/typography/typographyH2'
import { TypographyLead } from '@/components/typography/typographyLead'
import { Card } from '@/components/ui/card'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import EditButton from './EditButton'

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
  const id = parseInt(params.id)
  const issue = await prisma.issue.findUnique({
    where: {
      id: id
    }
  })

  if (!issue) {
    notFound()
  }

  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <TypographyH2>{issue.title}</TypographyH2>
            <div className="flex gap-3 md:gap-4 my-3">
              <IssueStatusBadge status={issue.status} />
              <TypographyLead>{issue.createdAt.toDateString()}</TypographyLead>
            </div>
            <Card className="w-[700px] my-6 p-2 px-4 flex items-center">
              <div className="flex items-center ">
                <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
              </div>
            </Card>
          </div>
          <EditButton id={id} />
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default IssueDetailPage
