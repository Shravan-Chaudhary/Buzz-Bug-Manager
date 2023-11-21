import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import IssueActions from "./IssueActions"

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5]

  return (
    <>
      <MaxWidthWrapper>
        <div>
          <IssueActions />
          <div className="rounded-md border border-neutral-300 p-2">
            <Table>
              <TableCaption>A list of your recent Issues.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Issue</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issues.map((issue) => (
                  <TableRow key={issue}>
                    <TableCell>
                      <Skeleton />
                      <div className="block md:hidden">
                        <Skeleton />
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Skeleton />
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default LoadingIssuesPage
