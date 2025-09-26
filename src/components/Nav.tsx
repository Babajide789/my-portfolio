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
    <nav className="flex items-center gap-6">
      {links.map((link, index) => {
        const isActive =
          link.path === "/"
            ? pathname === "/" // home should only match exact root
            : pathname.startsWith(link.path)

        return (
          <Link
            key={index}
            href={link.path}
            className={`
              relative capitalize font-medium text-sm md:text-base
              transition-colors duration-300
              ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
            `}
          >
            {link.name}

            {/* Active underline */}
            {isActive && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
