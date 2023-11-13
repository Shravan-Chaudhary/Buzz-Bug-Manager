import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import EditButton from './EditButton'
import IssueDetails from './IssueDetails'

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
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <IssueDetails issue={issue} />
          </div>
          <div>
            <EditButton issueId={issue.id} />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default IssueDetailPage
