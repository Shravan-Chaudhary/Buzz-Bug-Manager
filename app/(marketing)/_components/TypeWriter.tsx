"use client"
import React from "react"
import Typewriter from "typewriter-effect"

const TypeWriter = () => {
  return (
    <>
      <span className="text-blue-600">
        <Typewriter
          options={{
            strings: ["bug tracking", "bug management", "error analysis"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </>
  )
}

export default TypeWriter
