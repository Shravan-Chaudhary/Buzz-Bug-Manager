import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { Pencil } from 'lucide-react'

interface Props {
  id: number
}

const EditButton = ({ id }: Props) => {
  return (
    <>
      <Link
        href={`/issues/${id}/edit`}
        className={buttonVariants({
          variant: 'default',
          size: 'lg'
        })}
      >
        <Pencil className="mr-2 w-4 h-4" />
        Edit Issue
      </Link>
    </>
  )
}

export default EditButton
