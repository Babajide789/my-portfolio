"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"    

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex justify-center items-center p-2 border border-black rounded-md">
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-lg flex flex-col gap-6">
          <div className="text-xl font-bold">Babajide <span className="text-accent">.</span></div>
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path ? "text-accent font-bold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
