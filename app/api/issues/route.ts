import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"
import { issueSchema } from "@/lib/validations/issue-schema"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

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
      description,
    },
  })

  return NextResponse.json(newIssue, { status: 201 })
}
