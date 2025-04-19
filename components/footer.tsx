import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-nonstop-black/80 backdrop-blur-md">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/whitelogoforblackbg.png"
              alt="Non-stop Logo"
              width={220}
              height={70}
              className="mix-blend-luminosity"
            />
            <p className="text-center md:text-left text-sm text-gray-400">Where Learning Never Ends</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
            <Link href="/" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              About
            </Link>
            <Link href="/#programs" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Programs
            </Link>
            <Link href="/articles" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Articles
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-white mb-2">Programs</h3>
            <Link href="/#programs" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              QAD Series
            </Link>
            <Link href="/#programs" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Full Classroom Program
            </Link>
            <Link href="/#enroll" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Enroll Now
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
            <a
              href="mailto:nonstopwlne49@gmail.com"
              className="text-gray-400 hover:text-nonstop-blue transition-colors"
            >
              nonstopwlne49@gmail.com
            </a>
            <a href="https://wa.me/918945828056" className="text-gray-400 hover:text-nonstop-green transition-colors">
              +91 8945828056
            </a>
            <a href="/about" className="text-gray-400 hover:text-nonstop-blue transition-colors">
              Developer: Bibek Yadav
            </a>
            <div className="flex gap-4 mt-2">
              <Link
                href="https://www.facebook.com/share/1JGrWnQons/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nonstop-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/nonstop_wlne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nonstop-pink transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://t.me/nonstop_wlne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nonstop-blue transition-colors"
              >
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
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Non-stop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
