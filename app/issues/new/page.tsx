import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const NewIssuePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="space-y-5">
          <h1>Create New Issue</h1>
          <Input type="email" placeholder="Email" className="max-w-xl" />
          <Textarea placeholder="Type your message here." className="max-w-xl" />
          <Button>Submit New Issue</Button>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default NewIssuePage
