"use client";

import { useState } from "react";

const faqs = [
    {
        q: "What services do you offer?",
        a: "We specialize in UI/UX design, brand identity, website design, design systems, and ready-to-use templates.",
    },
    {
        q: "Do you work with startups or only established businesses?",
        a: "We work with startups, small businesses, and established enterprises alike.",
    },
    {
        q: "How long does a typical project take?",
        a: "Most projects take between 2–6 weeks depending on scope and complexity.",
    },
    {
        q: "Can I customize templates after purchase?",
        a: "Yes, all templates are fully customizable to match your brand and needs.",
    },
    {
        q: "How do we get started?",
        a: "Simply contact us or book a free consultation to discuss your project.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="">
            <div className="mx-auto max-w-5xl px-4">
                
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                        Frequently <span className="text-brand">Asked Questions</span>
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Everything you need to know before getting started
                    </p>
                </div>

                
                <div className="rounded-2xl bg-[#f1efec] p-4 sm:p-6 shadow-sm">
                    <ul className="space-y-4">
                        {faqs.map((item, i) => {
                            const isOpen = openIndex === i;

                            return (
                                <li
                                    key={i}
                                    className="rounded-xl bg-white px-6 py-5 transition"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                        className="flex w-full items-center justify-between text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <span className="text-base sm:text-lg font-semibold m-r-4 flex-1">
                                            {i + 1}. {item.q}
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-xl">
                                            {isOpen ? "×" : "+"}
                                        </span>
                                    </button>

                                    {/* ANSWER (no CLS) */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {item.a}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
