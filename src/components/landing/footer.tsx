"use client"
import React from "react"
import Link from "next/link"
import { ArrowRight, Twitter, Github, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative border-t max-h-screen overflow-y-hidden border-zinc-800/40 bg-zinc-950/70 backdrop-blur-xl py-16 px-6 sm:px-10 mt-24">
      {/* background rays */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60%] h-[200%] bg-primary/10 blur-[100px] opacity-40 -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
     
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          <div>
            <p className="text-xl font-bold">Profiles</p>
            <p className="text-sm text-zinc-400 mt-2">
              Your profile, your aesthetic. Create and customize your digital identity effortlessly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-zinc-200">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/editor" className="hover:text-primary transition-colors">
                  Editor
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-zinc-200">Connect</h3>
            <div className="flex justify-center sm:justify-start gap-4 text-zinc-400">
              <Link
                href="https://x.com/musheer_an"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://github.com/Musheer0"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="mailto:musheeran165@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom credit */}
        <div className="mt-10 border-t border-zinc-800/40 pt-6 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Profiles — Inspired by{" "}
            <Link
              href="https://x.com/heysatya_"
              target="_blank"
              className="text-primary hover:underline"
            >
              Satya
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
