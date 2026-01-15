// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useTheme } from "next-themes"
// import { motion } from "framer-motion"
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
// import Image from "next/image";

// export default function Header() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => setMounted(true), [])

//   return (
//     <motion.header
//       className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <Link href="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Flowers & Saints</span>
//             <Image
//               className="h-8 w-auto"
//               src="/images/10.png"
//               alt="Flowers & Saints Logo"
//               width={100}
//               height={64}
//             />
//           </Link>
//         </div>
//         <div className="flex gap-x-12">
//           <Link
//             href="https://evaraa.co/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
//           >
//             Work
//           </Link>
//           <Link
//             href="https://evaraa.co/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="https://evaraa.co/contact"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
//           >
//             Contact
//           </Link>
//         </div>
//         <div className="flex flex-1 justify-end">
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
//             >
//               {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
//             </button>
//           )}
//         </div>
//       </nav>
//     </motion.header>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/10.png"
            alt="Flowers & Saints"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-12">
          {/* {["Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-foreground hover:text-primary transition"
            >
              {item}
            </a>
          ))} */}
          {[
    { label: "Work", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => {
        const section = document.getElementById(item.id)
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }}
      className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer"
    >
      {item.label}
    </button>
  ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg border border-border"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {/* {["Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-foreground hover:text-primary"
                >
                  {item}
                </a>
              ))} */}
              {[
    { label: "Work", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => {
        const section = document.getElementById(item.id)
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }}
      className="text-sm font-semibold text-foreground hover:text-primary transition cursor-pointer"
    >
      {item.label}
    </button>
  ))}

              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <XMarkIcon className="h-5 w-5" /> Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
