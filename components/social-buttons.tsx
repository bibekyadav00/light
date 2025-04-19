"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsApp, Instagram } from "lucide-react"

export default function SocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 md:flex-row md:gap-4 z-40">
      <Button
        asChild
        size="icon"
        className="rounded-full bg-nonstop-green hover:bg-nonstop-green-dark shadow-lg shadow-green-600/20 animate-glow"
      >
        <Link href="https://wa.me/918945828056" target="_blank" rel="noopener noreferrer">
          <WhatsApp className="h-5 w-5" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </Button>
      <Button
        asChild
        size="icon"
        className="rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 animate-glow"
      >
        <Link href="https://t.me/nonstop_wlne" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M21.5 4.5 2.5 12.5 11.5 14.5 14.5 21.5 21.5 4.5" />
          </svg>
          <span className="sr-only">Telegram</span>
        </Link>
      </Button>
      <Button
        asChild
        size="icon"
        className="rounded-full bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-600/20 animate-glow"
      >
        <Link href="https://www.instagram.com/nonstop_wlne" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>
    </div>
  )
}
