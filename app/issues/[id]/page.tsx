import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import EditButton from "./EditButton"
import IssueDetails from "./IssueDetails"
import DeleteIssueButton from "./DeleteIssueButton"

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
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
      <MaxWidthWrapper>
        <div className="flex flex-col flex-wrap gap-5 md:flex-row">
          <div className="w-auto md:w-[80%] ">
            <IssueDetails issue={issue} />
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto">
            <EditButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default IssueDetailPage
