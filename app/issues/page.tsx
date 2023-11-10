import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import prisma from '@/prisma/client'
import Link from 'next/link'
import React from 'react'

const IssuePage = async () => {
  const issues = await prisma.issue.findMany({})
  console.log(issues)

  return (
    <>
      <MaxWidthWrapper>
        <Link
          href={'/issues/new'}
          className={buttonVariants({
            variant: 'default',
            size: 'lg'
          })}
        >
          New Issue
        </Link>
      </MaxWidthWrapper>
    </>
  )
}

export default IssuePage
