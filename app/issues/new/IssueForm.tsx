'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface IssueForm {
  title: string
  description: string
}

const IssueForm = () => {
  const { register, handleSubmit, control } = useForm<IssueForm>()
  const router = useRouter()

  const submitForm = async (data: IssueForm) => {
    const res = await axios('/api/issues', {
      method: 'POST',
      data
    })
    if (res.status === 201) {
      router.push('/issues')
    } else {
      alert('Something went wrong!')
    }
  }

  return (
    <form className="max-w-xl space-y-5" onSubmit={handleSubmit(submitForm)}>
      <h1>Create New Issue</h1>
      <Input type="text" placeholder="Title" {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
      />
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default IssueForm
