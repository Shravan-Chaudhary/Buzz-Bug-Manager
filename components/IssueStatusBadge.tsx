import React from "react"
import { Badge } from "@/components/ui/badge"
import { Status } from "@prisma/client"

interface Props {
  status: Status
}

const statusMap: Record<Status, { label: string; color: "red" | "green" | "indigo" }> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "indigo" },
  CLOSED: { label: "Closed", color: "green" },
}

const IssueStatusBadge = ({ status }: Props) => {
  return <Badge variant={statusMap[status].color}>{statusMap[status].label}</Badge>
}

export default IssueStatusBadge
