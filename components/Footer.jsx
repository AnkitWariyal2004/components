import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#F7F5F2]">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Parvati and Sons"
              width={140}
              height={40}
              className="mb-4"
              priority={false}
            />
            <p className="text-md text-gray-600 leading-tight">
              Designing modern digital experiences for brands,
              startups, and product teams
            </p>

            <p className="mt-6 text-md font-bold">
              Let’s discuss about your project.
            </p>

            {/* EMAIL INPUT */}
            <div className="mt-3 flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-gray-300 px-4 py-2 text-md focus:outline-none"
              />
              <button
                aria-label="Submit Email"
                className="rounded-r-md bg-orange-500 px-4 text-white"
              >
                →
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-bold text-xl">Quick Links</h4>
            <ul className="space-y-2 text-md text-gray-600">
              <li><Link href="/" className="text-orange-500">Home</Link></li>
              <li><Link href="/our-work" className="hover:text-brand">Our work</Link></li>
              <li><Link href="/template" className="hover:text-brand">Template</Link></li>
              <li><Link href="/features" className="hover:text-brand">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-brand">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-4 font-bold text-xl">Legal Links</h4>
            <ul className="space-y-2 text-md text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-brand">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-brand">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand">Terms and condition</Link></li>
              <li><Link href="/cancellation" className="hover:text-brand">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* OTHER */}
          <div>
            <h4 className="mb-4 font-bold text-xl">Other Links</h4>
            <ul className="space-y-2 text-md text-gray-600">
              <li><a href="https://dev.to" target="_blank" className="hover:text-brand">dev.to</a></li>
              <li><a href="https://pinterest.com" target="_blank" className="hover:text-brand">Pinterest</a></li>
              <li><a href="https://quora.com" target="_blank" className="hover:text-brand">Quora</a></li>
              <li><a href="https://stackoverflow.com" target="_blank" className="hover:text-brand">Stackoverflow</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      {/* BOTTOM BAR */}
<div className="bg-[#F7F5F2] pb-10">
  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-[#EFEDEA] px-6 py-4 md:flex-row">
      
      {/* LEFT */}
      <p className="text-md text-gray-600">
        Copyright ©2026 Parvati and sons
      </p>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-gray-600">
        <a
          href="#"
          aria-label="X"
          className="hover:text-black transition"
        >
          <FaXTwitter className="font-bold"/>
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-black transition"
        >
          <FaFacebookF className="font-bold"/>
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-black transition"
        >
          <FaLinkedinIn className="font-bold"/>
        </a>
      </div>

    </div>
  </div>
</div>

    </footer>
  );
}
