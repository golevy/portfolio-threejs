"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "~/lib/utils"
import { navLinks } from "~/constants"

const Navbar = () => {
  const [active, setActive] = React.useState("")
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav
      className={cn(
        "w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary",
        "sm:px-16 px-6"
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
            src="/logo.png"
            alt="logo"
            className="w-16 h-16 object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                "hover:text-white text-lg font-medium cursor-pointer",
                {
                  "text-white": active === link.title,
                  "text-secondary": active !== link.title,
                }
              )}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            className="object-contain cursor-pointer w-7 h-7"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-xl",
              !toggle ? "hidden" : "flex"
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    "font-medium font-poppins text-base cursor-pointer",
                    {
                      "text-white": active === link.title,
                      "text-secondary": active !== link.title,
                    }
                  )}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
