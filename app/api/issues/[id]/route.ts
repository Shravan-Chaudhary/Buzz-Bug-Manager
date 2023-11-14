import { issueSchema } from '@/app/validationSchemas'
import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

interface Props {
  params: {
    id: string
  }
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const requestBody = await request.json()
  const validatedBody = issueSchema.safeParse(requestBody)
  if (!validatedBody.success) {
    return NextResponse.json(validatedBody.error.format(), { status: 400 })
  }

  // find issue by id
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!issue) {
    return NextResponse.json({ message: 'Issue not found' }, { status: 404 })
  }

  // update issue
  const { title, description } = validatedBody.data
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id
    },
    data: {
      title,
      description
    }
  })

  return NextResponse.json(updatedIssue, { status: 201 })
}
