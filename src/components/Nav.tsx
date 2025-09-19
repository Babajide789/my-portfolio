"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive =
          link.path === "/"
            ? pathname === "/" // home should only match exact root
            : pathname.startsWith(link.path)

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all hover:text-black ${
              isActive ? "text-black border-b-2 border-black" : ""
            }`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
