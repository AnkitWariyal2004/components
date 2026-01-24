"use client";

import { useRef } from "react";

const testimonials = [
  {
    text:
      "Working with them felt effortless. The designs were clean, thoughtful, and aligned perfectly with our goals.",
    author: "Founder",
    company: "SaaS Startup",
  },
  {
    text:
      "They didn’t just design screens — they helped us think clearly about structure, flow, and user experience.",
    author: "Founder",
    company: "SaaS Startup",
  },
  {
    text:
      "Fast, reliable, and detail-oriented. The final output looked polished and professional across all devices.",
    author: "Founder",
    company: "SaaS Startup",
  }
];

export default function TestimonialsSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.firstChild.offsetWidth + 24;

    sliderRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="">
      <div className="mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold">
            What Our <span className="text-brand">Clients Say</span>
          </h2>
          <p className="mt-2 text-md text-gray-600 leading-tight">
            Honest feedback from teams we’ve partnered with
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            snap-x snap-mandatory
            scrollbar-hidden
            backdrop-filter: blur(10px);
          "
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="
                snap-start
                min-w-full
                md:min-w-[calc(33.333%-16px)]
                rounded-xl
                bg-[#efeeeb]
                p-6
              "
            >
              <p className="text-md font-bold ">{t.text}</p>

              <div className="mt-20 flex items-center justify-between">
                <p className="text-md text-gray-600 leading-tight">
                  — {t.author},{" "}
                  <span className="text-brand leading-tight">{t.company}</span>
                </p>

                <div className="flex gap-1 text-brand">★★★★★</div>
              </div>
            </article>
          ))}
        </div>

        {/* ARROWS */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-white shadow"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
