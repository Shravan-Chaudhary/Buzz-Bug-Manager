import React from "react"
import NextLink from "next/link"

interface Props {
  href: string
  children: string
}

const Link = ({ href, children }: Props) => {
  return (
    <>
      <NextLink href={href} passHref legacyBehavior>
        <a
          href={href}
          className="hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 font-medium text-primary transition duration-150 ease-in-out"
        >
          {children}
        </a>
      </NextLink>
    </>
  )
}

export default Link
