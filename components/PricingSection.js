export default function PricingSection() {
    return (
        <section className="py-15 ">
            <div className="mx-auto max-w-7xl px-4">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-semibold">
                        Simple, <span className="text-brand">Transparent Pricing</span>
                    </h2>
                    <p className="mt-3 text-sm text-gray-500">
                        Choose a plan that fits your needs, no hidden costs, no surprises
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-5 lg:grid-cols-3">
                    {/* STARTER */}
                    <div className="rounded-2xl bg-[#efeeeb] p-4 md:p-5 p-3 shadow-sm">
                        <div className="rounded-2xl bg-white p-8 shadow-sm h-full ">
                            <p className="mb-3 text-xs font-semibold tracking-widest text-gray-400">
                                STARTER
                            </p>

                            <div className="mb-6 flex items-end gap-2 ">
                                <span className="text-4xl font-bold">₹9,999</span>
                                <span className="text-xs text-gray-500">/ PROJECT</span>
                            </div>

                            <hr className="mb-2 text-gray-300"/>

                            <ul className="space-y-3 text-sm text-gray-700 ">
                                <li> <span className="text-brand font-bold text-2xl">•</span> 1 Landing Page Or Screen Set</li>
                                <li><span className="text-brand font-bold text-2xl">•</span> Clean, Modern UI Design</li>
                                <li><span className="text-brand font-bold text-2xl">•</span> Basic UX Structure</li>
                                <li><span className="text-brand font-bold text-2xl">•</span> Mobile-Responsive Layout</li>
                                <li><span className="text-brand font-bold text-2xl">•</span> 1 Round Of Revisions</li>
                            </ul>

                            <button className="mt-8 rounded-md bg-brand px-5 py-2 text-sm font-medium text-white shadow-sm">
                                Get Started now
                            </button>
                        </div>
                    </div >


                    {/* GROWTH (HIGHLIGHTED) */}
                    < div className="rounded-2xl bg-[#efeeeb] p-4 md:p-5 p-3 shadow-sm">
                        <div className="rounded-2xl bg-brand p-8 text-white shadow-md">
                            <p className="mb-3 text-xs font-semibold tracking-widest opacity-80">
                                GROWTH
                            </p>

                            <div className="mb-6 flex items-end gap-2">
                                <span className="text-4xl font-bold">₹24,999</span>
                                <span className="text-xs opacity-80">/ PROJECT</span>
                            </div>

                            <hr className="mb-2 text-gray-300"/>

                            <ul className="space-y-3 text-sm">
                                <li> <span className="text-gray font-bold text-2xl">•</span>  Multi-Page Website Or App Screens</li>
                                <li> <span className="text-gray font-bold text-2xl">•</span>  UX Strategy & User Flow</li>
                                <li> <span className="text-gray font-bold text-2xl">•</span>  Custom Components & Layouts</li>
                                <li> <span className="text-gray font-bold text-2xl">•</span>  Responsive Across Devices</li>
                                <li> <span className="text-gray font-bold text-2xl">•</span>  Up To 3 Revision Rounds</li>
                            </ul>

                            <button className="mt-8 rounded-md bg-black px-5 py-2 text-sm font-medium text-white shadow-sm">
                                Choose Growth
                            </button>
                        </div>
                    </div>


                    {/* SCALE */}
                    <div className="rounded-2xl bg-[#efeeeb] p-4 md:p-5 p-3 shadow-sm">
                        <div className="rounded-2xl bg-white p-8 shadow-sm">
                        <p className="mb-3 text-xs font-semibold tracking-widest text-gray-400">
                            SCALE
                        </p>

                        <h3 className="mb-6 text-2xl font-semibold">
                            Custom Pricing
                        </h3>

                        <hr className="mb-2 text-gray-300"/>

                        <ul className="space-y-3 text-sm text-gray-700">
                            <li><span className="text-brand font-bold text-2xl">•</span> Full Product Or Website Design</li>
                            <li><span className="text-brand font-bold text-2xl">•</span> UX Research & Structure</li>
                            <li><span className="text-brand font-bold text-2xl">•</span> Scalable Design System</li>
                            <li><span className="text-brand font-bold text-2xl">•</span> Advanced Interactions Guidance</li>
                            <li><span className="text-brand font-bold text-2xl">•</span> Unlimited Revisions (Within Scope)</li>
                        </ul>

                        <button className="mt-8 rounded-md bg-brand px-5 py-2 text-sm font-medium text-white    shadow-sm">
                            Contact Us
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
