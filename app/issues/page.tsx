import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import IssueTable from './IssueTable'
import delay from 'delay'
import IssueActions from './IssueActions'

const IssuePage = async () => {
  await delay(5000)
  return (
    <>
      <MaxWidthWrapper>
        <IssueActions />
        <IssueTable />
      </MaxWidthWrapper>
    </>
  )
}

export default IssuePage
