import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Pencil } from "lucide-react"

interface Props {
  issueId: number
}

const EditButton = ({ issueId }: Props) => {
  return (
    <>
      <Link
        href={`/issues/${issueId}/edit`}
        className={buttonVariants({
          variant: "default",
          size: "lg",
        })}
      >
        <Pencil className="mr-2 h-4 w-4" />
        Edit Issue
      </Link>
    </>
  )
}

export default EditButton
