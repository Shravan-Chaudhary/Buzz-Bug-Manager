import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/bug.svg"

const MainNavMarketing = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-40 mb-5 h-14 w-full border-b border-gray-200 bg-white/30 backdrop-blur-lg transition-all ">
      <MaxWidthWrapper className="flex h-14 items-center justify-between border-b border-zinc-200">
        <div className={"flex gap-10 sm:gap-14 md:gap-20"}>
          <Link href={"/"} className="z-40 font-semibold md:text-xl">
            <Image src={logo} alt="logo" width={40} height={40} />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default MainNavMarketing
