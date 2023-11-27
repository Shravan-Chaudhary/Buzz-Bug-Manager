import { authOptions } from "@/lib/auth"
import { issueSchema } from "@/lib/validations/issue-schema"
import prisma from "@/prisma/client"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

interface Props {
  params: {
    id: string
  }
}

// Update Issue
export async function PATCH(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  // validate request body
  const requestBody = await request.json()
  const validatedBody = issueSchema.safeParse(requestBody)
  if (!validatedBody.success) {
    return NextResponse.json(validatedBody.error.format(), { status: 400 })
  }

  // find issue by id
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!issue) {
    return NextResponse.json({ message: "Issue not found" }, { status: 404 })
  }

  // update issue
  const { title, description } = validatedBody.data
  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title,
      description,
    },
  })

  return NextResponse.json(updatedIssue, { status: 201 })
}

// Delete Issue
export async function DELETE(request: NextRequest, { params }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  // find issue by id
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!issue) {
    return NextResponse.json({ message: "Issue not found" }, { status: 404 })
  }

  // delete issue
  await prisma.issue.delete({
    where: {
      id: issue.id,
    },
  })

  return NextResponse.json(issue.id, { status: 200 })
}
