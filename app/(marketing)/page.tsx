import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import TypeWriter from "./_components/TypeWriter"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import FeaturesCard from "./_components/FeaturesCard"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center dark:bg-transparent  sm:mt-40">
        <section>
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-gray-700">Buzz is now public!</p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Elevate your <TypeWriter /> to the next level.
          </h1>
          <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
            Buzz simplifies bug tracking and analysis. Prioritize issues, monitor reports, and gain
            insights to improve your software. Start your bug-free journey with Buzz.
          </p>
          <div className="space-x-4">
            <Link
              href={"/dashboard"}
              className={buttonVariants({
                size: "lg",
                className: "mt-10",
              })}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </section>

        <section id="features" className="mt-40 space-y-6 py-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
            <p className="max-w-prose leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              This project is an experiment to see how a modern app, with features like auth,
              subscriptions, API routes, and static pages would work in Next.js 13 app dir.
            </p>
          </div>

          <FeaturesCard />
        </section>
      </MaxWidthWrapper>
    </>
  )
}
