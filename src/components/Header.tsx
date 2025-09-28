"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Babajide <span className="text-foreground">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative capitalize font-medium text-sm md:text-base transition-colors duration-300
                  ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Hire Me CTA */}
          <Link href="/contact">
            <button
              className="px-6 py-2 rounded-full font-medium
                         bg-primary text-primary-foreground
                         shadow-md transition-all duration-300
                         hover:bg-primary/90 hover:shadow-lg hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Hire Me
            </button>
          </Link>
        </nav>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <Dialog.Root open={open} onOpenChange={setOpen}>
            {/* Trigger: we keep Trigger asChild but also handle setOpen for immediate control */}
            <Dialog.Trigger asChild>
              <button
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="md:hidden relative flex items-center justify-center w-12 h-12 rounded-md text-black hover:text-black transition-colors duration-300"
              >
                {/* two stacked icons — we fade/scale them to create a smooth transition */}
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ${
                    open ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </span>

                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ${
                    open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 -rotate-90"
                  }`}
                >
                  <X className="w-6 h-6" />
                </span>
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              {/* Overlay */}
              <Dialog.Overlay
                className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              {/* Content: add the 'dialog-mobile' classname so CSS can target children for animations */}
              <Dialog.Content
                className="dialog-mobile fixed top-0 right-0 h-full w-64 bg-background border-l border-border 
                           p-6 shadow-lg flex flex-col gap-6
                           data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut"
              >
                {/* Logo */}
                <div className="text-lg font-bold text-primary">
                  Babajide <span className="text-accent">.</span>
                </div>

                {/* Nav Links — each link gets an inline animationDelay to create the stagger */}
                <nav className="flex flex-col gap-4">
                  {links.map((link, index) => {
                    const isActive =
                      link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);

                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setOpen(false)}
                        className={`capitalize text-base font-medium transition-colors mobile-nav-link
                          ${isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}
                        `}
                        style={{ animationDelay: `${index * 80 + 120}ms` }}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                  {/* Mobile CTA (also part of the stagger) */}
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <button
                      className="mt-4 w-full px-6 py-2 rounded-full font-medium
                                 bg-primary text-primary-foreground
                                 shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                      style={{ animationDelay: `${links.length * 80 + 200}ms` }}
                    >
                      Hire Me
                    </button>
                  </Link>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
