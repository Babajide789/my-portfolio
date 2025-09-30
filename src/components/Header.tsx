"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // lock scroll on open
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
                {/* Hamburger / X button */}
                <button
                    onClick={() => setOpen((s) => !s)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="md:hidden relative flex items-center justify-center w-12 h-12 rounded-md text-black cursor-pointer"
                >
                    <motion.span
                        initial={false}
                        animate={open ? "open" : "closed"}
                        className="flex flex-col justify-between w-6 h-5 relative"
                    >
                        {/* Top line */}
                        <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 8 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 h-[2px] w-full bg-current rounded"
                        />
                        {/* Middle line */}
                        <motion.span
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-full bg-current rounded"
                        />
                        {/* Bottom line */}
                        <motion.span
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -10 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-current rounded"
                        />
                    </motion.span>
                </button>

                <Dialog.Portal>
                    {/* Overlay */}
                    <AnimatePresence>
                        {open && (
                            <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]" // ⬅️ add high z-index
                            />
                            </Dialog.Overlay>
                        )}
                    </AnimatePresence>

                    {/* Panel */}
                    <AnimatePresence>
                        {open && (
                        <Dialog.Content asChild forceMount>
                            <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 280, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-64 bg-background border-l border-border p-6 shadow-lg flex flex-col gap-6 z-[100]"
                            >
                            {/* Logo */}
                            <div className="text-lg font-bold text-primary">
                                Babajide <span className="text-accent">.</span>
                            </div>

                            {/* Links with stagger */}
                            <motion.nav
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                hidden: {},
                                show: {
                                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                                },
                                }}
                                className="flex flex-col gap-4"
                            >
                                {links.map((link) => {
                                const isActive =
                                    link.path === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.path);

                                return (
                                  <motion.div
                                    key={link.path}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        show: { opacity: 1, x: 0 },
                                    }}
                                    >
                                    <Link
                                        href={link.path}
                                        onClick={() => setOpen(false)}
                                        className={`capitalize text-base font-medium transition-colors
                                        ${
                                            isActive
                                            ? "text-primary font-semibold"
                                            : "text-muted-foreground hover:text-foreground"
                                          }
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                  </motion.div>
                                );
                                })}

                                {/* CTA */}
                                <motion.div
                                variants={{
                                  hidden: { opacity: 0, x: 20 },
                                  show: { opacity: 1, x: 0 },
                                }}
                                >
                                <Link href="/contact" onClick={() => setOpen(false)}>
                                    <button
                                    className="mt-4 w-full px-6 py-2 rounded-full font-medium
                                      bg-primary text-primary-foreground
                                      shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 cursor-pointer"
                                    >
                                    Hire Me
                                    </button>
                                </Link>
                                </motion.div>
                            </motion.nav>
                            </motion.div>
                        </Dialog.Content>
                        )}
                    </AnimatePresence>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
