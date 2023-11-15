import { buttonVariants } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import Link from 'next/link'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

interface Props {
  issueId: number
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
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
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Are you sure you want to delete this issue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DeleteIssueButton
