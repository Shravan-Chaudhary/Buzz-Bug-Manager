'use client'
import { Button, buttonVariants } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
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
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Props {
  issueId: number
}

const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter()

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={'destructive'} size={'lg'}>
            <TrashIcon className="mr-2 w-4 h-4" />
            Delete
          </Button>
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
            <AlertDialogAction
              className="bg-destructive hover:bg-destructive/90"
              onClick={async () => {
                await axios.delete(`/api/issues/${issueId}`)
                router.push('/issues')
                router.refresh()
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default DeleteIssueButton
