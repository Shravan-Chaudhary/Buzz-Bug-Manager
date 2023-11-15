import IssueStatusBadge from '@/components/IssueStatusBadge'
import { TypographyH2 } from '@/components/typography/typographyH2'
import { TypographyLead } from '@/components/typography/typographyLead'
import { Card } from '@/components/ui/card'
import { Issue } from '@prisma/client'
import ReactMarkdown from 'react-markdown'

interface Props {
  issue: Issue
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <TypographyH2>{issue.title}</TypographyH2>
      <div className="flex gap-3 md:gap-4 my-3">
        <IssueStatusBadge status={issue.status} />
        <TypographyLead>{issue.createdAt.toDateString()}</TypographyLead>
      </div>
      <Card className="w-full my-6 p-4 flex items-center ">
        <div className="flex items-center ">
          <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
        </div>
      </Card>
    </>
  )
}

export default IssueDetails
