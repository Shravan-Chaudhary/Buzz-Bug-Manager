'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import SimpleMDE from "react-simplemde-editor"
// import "easymde/dist/easymde.min.css"


const IssueForm = () => {
  return (
     <div className="max-w-xl space-y-5">
          <h1>Create New Issue</h1>
          <Input type="text" placeholder="Title"  />
         {/* <SimpleMDE placeholder='Description' /> */}
          <Button>Submit New Issue</Button>
        </div>
  )
}

export default IssueForm