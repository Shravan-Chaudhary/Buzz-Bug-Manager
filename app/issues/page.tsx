import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'
import IssueTable from './IssueTable'

const IssuePage = async () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mb-5">
          <Link
            href={'/issues/new'}
            className={buttonVariants({
              variant: 'default',
              size: 'lg'
            })}
          >
            New Issue
          </Link>
        </div>
        <IssueTable />
      </MaxWidthWrapper>
    </>
  )
}

export default IssuePage
