import { buttonVariants } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'

interface Props {
  issueId: number
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <>
      <Link
        href={`/issues/${issueId}`}
        className={buttonVariants({
          variant: 'destructive',
          size: 'lg'
        })}
      >
        <TrashIcon className="mr-2 w-4 h-4" />
        Delete
      </Link>
    </>
  )
}

export default DeleteIssueButton
