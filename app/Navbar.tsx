'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '@/public/bug.svg'

const Navbar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' }
  ]

  return (
    <nav className="sticky inset-x-0 top-0 z-40 mb-5 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={'/'} className="z-40 font-semibold md:text-xl">
            <Image src={logo} alt="logo" width={40} height={40} />
          </Link>
          <ul className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  currentPath === link.href ? 'text-zinc-900' : 'text-zinc-500'
                } z-40 font-semibold transition-colors hover:text-zinc-800 md:text-lg`}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar

// postgres://bitznatch1110:Blxz2FvpOdR9@ep-winter-tree-91319555.ap-southeast-1.aws.neon.tech/issue-tracker
