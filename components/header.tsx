"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-nonstop-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/whitelogoforblackbg.png"
            alt="Non-stop Logo"
            width={200}
            height={50}
            className="mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/#programs" className="nav-link">
            Programs
          </Link>
          <Link href="/articles" className="nav-link">
            Articles
          </Link>
          <Link href="/#enroll" className="nav-link">
            Enroll
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow">
            <Link href="/#enroll">Enroll Now</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-white/10 bg-black/20 text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-nonstop-black border-white/5">
              <nav className="flex flex-col gap-6 mt-12">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#programs"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  href="/articles"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Articles
                </Link>
                <Link
                  href="/#enroll"
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Enroll
                </Link>
                <div className="mt-4">
                  <Button asChild className="bg-nonstop-blue hover:bg-nonstop-blue-dark btn-glow">
                    <Link href="/#enroll" onClick={() => setIsOpen(false)}>
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
