"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "~/lib/utils"
import { styles } from "~/styles/style"

const Navbar = () => {
  const [active, setActive] = React.useState("")

  return (
    <nav
      className={cn(
        "w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary",
        styles.paddingX
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
          href="/"
          className="flex items-center gap-2"
        >
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Levy <span className="sm:block hidden">| JavaScript Mastery</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
