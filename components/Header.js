"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // mobile fix
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);


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
            <nav className="hidden lg:flex items-center gap-8 text-md font-medium">
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
        <div
          className="fixed inset-0 z-500 bg-black/40"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-gray-300 px-4 py-3">
              <div className="w-full">
                {/* LOGO */}
                <Image
                  src="/images/logo.webp"
                  alt="Parvati and Sons"
                  width={140}
                  height={40}
                  // priority
                  loading="lazy"
                />
                {/* <div>
                  <p className="text-sm font-semibold text-gray-900">
                    PARVATI & SONS
                  </p>
                  <p className="text-xs text-orange-600">
                    Developing Web & Software Services
                  </p>
                </div> */}
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-xl text-gray-600 font-bold hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col px-4 py-3 text-md">
              <Link href="/" className="py-2 text-brand font-medium border-b border-gray-300 border-dashed">
                Home
              </Link>
              <Link href="/our-work" className="py-2 font-medium border-b border-gray-300 border-dashed">
                Our work
              </Link>
              <Link href="/template" className="py-2 font-medium border-b border-gray-300 border-dashed">
                Template
              </Link>
              <Link href="/features" className="py-2  font-medium border-b border-gray-300 border-dashed">
                Features
              </Link>
              <Link href="/pricing" className="py-2  font-medium border-b border-gray-300 border-dashed">
                Pricing
              </Link>
              <Link href="/contact" className="py-2 font-medium border-b border-gray-300 border-dashed">
                Contact
              </Link>
            </nav>

            {/* SPACER */}
            <div className="flex-1" />

            {/* FOOTER */}
            <div className=" m-2 px-4 py-4 text-md font-bold text-gray-700 space-y-4">
              {/* ADDRESS */}
              <div className="flex flex-row gap-3 items-center border-b border-t pt-2 border-gray-300 border-dashed pb-2">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                </div>
                <p className="leading-none">
                  First floor, Hotel Pearl Inn, Behind Bada Gurudwara,
                  Gole Market, Rudrapura, 263153
                </p>
              </div>

              {/* EMAIL */}
              <div className="flex gap-3 border-b border-gray-300 border-dashed pb-2 items-center justify-start">
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

                </span>
                <Link
                  href="mailto:info@parvatiandsons.com"
                  className="hover:underline leading-none"
                >
                  info@parvatiandsons.com
                </Link>
              </div>

              {/* PHONE */}
              <div className="flex gap-3 items-center  border-b border-gray-300 border-dashed pb-2 justify-start">
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>

                </span>
                <Link href="tel:+919837994101" className="leading-none">
                  +91-9837994101
                </Link>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 pt-2 text-md">
                <a href="#" aria-label="X"><FaXTwitter /></a>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </aside>
        </div>
      )}

    </>
  );
}


