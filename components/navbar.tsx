"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SmileIcon as Tooth, Menu, User } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Tooth className="h-5 w-5" />
                  <span>Dental Checkup</span>
                </Link>
                <nav className="grid gap-4 py-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                  <Link href="/dentists" className="hover:underline">
                    Find Dentists
                  </Link>
                  <Link href="/checkup/request" className="hover:underline">
                    Request Checkup
                  </Link>
                  <Link href="/checkup/results" className="hover:underline">
                    My Results
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Tooth className="h-5 w-5" />
            <span className="text-lg font-semibold">Dental Checkup</span>
          </Link>
          <nav className="ml-8 hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/dentists" className="text-sm font-medium hover:underline">
              Find Dentists
            </Link>
            <Link href="/checkup/request" className="text-sm font-medium hover:underline">
              Request Checkup
            </Link>
            <Link href="/checkup/results" className="text-sm font-medium hover:underline">
              My Results
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {isLoggedIn ? (
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          ) : (
            <div className="flex gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
