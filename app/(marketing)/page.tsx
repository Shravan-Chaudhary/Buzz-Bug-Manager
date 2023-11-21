import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Buzz is now public!</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Elevate your <span className="text-blue-600">bug tracking</span> to the next level.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Buzz simplifies bug tracking and analysis. Prioritize issues, monitor reports, and gain
          insights to improve your software. Start your bug-free journey with Buzz.
        </p>
        <Link
          href={"/dashboard"}
          className={buttonVariants({
            size: "lg",
            className: "mt-10",
          })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  )
}
