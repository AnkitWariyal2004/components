"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-6">
          <div className="flex h-16 items-center justify-between rounded-lg bg-white px-6 shadow-md">

            {/* LOGO */}
            <Image
              src="/images/logo.webp"
              alt="Parvati and Sons"
              width={140}
              height={40}
              // priority
              loading="lazy"
            />

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="text-brand">Home</Link>
              <Link href="/our-work">Our work</Link>
              <Link href="/template">Template</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            {/* CTA */}
            <Link
              href="/start-project"
              className="hidden lg:block rounded-md bg-black px-5 py-2 text-sm text-white"
            >
              Start a Project
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden"
              aria-label="Open Menu"
            >
              <span className="block h-0.5 w-6 bg-black mb-1"></span>
              <span className="block h-0.5 w-6 bg-black mb-1"></span>
              <span className="block h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6">
            <button onClick={() => setOpen(false)} className="mb-6 text-xl">✕</button>
            <nav className="flex flex-col gap-5">
              <Link href="/" className="text-brand">Home</Link>
              <Link href="/our-work">Our work</Link>
              <Link href="/template">Template</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
