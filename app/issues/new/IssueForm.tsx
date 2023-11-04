'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateIssueSchema, createIssueSchema } from '@/app/validationSchemas'

const IssueForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<CreateIssueSchema>({
    resolver: zodResolver(createIssueSchema)
  })
  const router = useRouter()
  const { toast } = useToast()

  const submitForm = async (data: CreateIssueSchema) => {
    try {
      const res = await axios('/api/issues', {
        method: 'POST',
        data
      })
      router.push('/issues')
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        duration: 3000
      })
    }
  }

  return (
    <form className="max-w-xl space-y-4" onSubmit={handleSubmit(submitForm)}>
      <h1>Create New Issue</h1>
      <Input type="text" placeholder="Title" {...register('title')} />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}
      />
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default IssueForm
