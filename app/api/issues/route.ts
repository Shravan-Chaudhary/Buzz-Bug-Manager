import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import { createIssueSchema } from '../../validationSchemas'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validatedBody = createIssueSchema.safeParse(body)
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
