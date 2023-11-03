'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import React from 'react'

const NewIssuePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="max-w-xl space-y-5">
          <h1>Create New Issue</h1>
          <Input type="text" placeholder="Title"  />
         <SimpleMDE placeholder='Description' />
          <Button>Submit New Issue</Button>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default NewIssuePage
