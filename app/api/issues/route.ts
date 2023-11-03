import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/prisma/client'

const issueSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  description: z.string().min(1, 'Description is required')
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validatedBody = issueSchema.safeParse(body)
  if (!validatedBody.success) {
    return NextResponse.json(validatedBody.error.format(), { status: 400 })
  }
  const { title, description } = validatedBody.data
  // ... save to database
  const newIssue = await prisma.issue.create({
    data: {
      title,
      description
    }
  })

  return NextResponse.json(newIssue, { status: 201 })
}
