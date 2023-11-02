'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ]

  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href={'/'}>Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              currentPath === link.href ? 'text-zinc-900' : 'text-zinc-500'
            } transition-colors hover:text-zinc-800`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

// postgres://bitznatch1110:Blxz2FvpOdR9@ep-winter-tree-91319555.ap-southeast-1.aws.neon.tech/issue-tracker
