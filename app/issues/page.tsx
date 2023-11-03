import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const IssuePage = () => {
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
