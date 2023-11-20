"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/public/bug.svg"
import { useSession } from "next-auth/react"
import { buttonVariants } from "@/components/ui/button"

const Navbar = () => {
  const currentPath = usePathname()
  const { status, data: session } = useSession()
  const links = [
    { label: "Home", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <nav className="sticky inset-x-0 top-0 z-40 mb-5 h-14 w-full border-b border-gray-200 bg-white/30 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper className="flex h-14 items-center justify-between border-b border-zinc-200">
        {/* Logo and Links Container */}
        <div className={"flex gap-10 sm:gap-14 md:gap-20"}>
          <Link href={"/"} className="z-40 font-semibold md:text-xl">
            <Image src={logo} alt="logo" width={40} height={40} />
          </Link>
          <ul className="flex items-center gap-6 md:gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  currentPath === link.href ? "text-zinc-900" : "text-zinc-500"
                } z-40 font-semibold transition-colors hover:text-zinc-800 md:text-lg`}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </ul>
        </div>

        {/* SignIn SignOut Button Container */}
        <div>
          {status === "unauthenticated" && (
            <Link
              href={"/api/auth/signin"}
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Sign In
            </Link>
          )}
          {status === "authenticated" && (
            <Link
              href={"/api/auth/signout"}
              className={buttonVariants({
                size: "lg",
                variant: "ghost",
              })}
            >
              Log Out
            </Link>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar

// postgres://bitznatch1110:Blxz2FvpOdR9@ep-winter-tree-91319555.ap-southeast-1.aws.neon.tech/issue-tracker
