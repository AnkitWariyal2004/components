import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f6f3] border-b border-gray-200">

            {/* BACKGROUND CURVES */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <Image
                    src="/images/hero-curves.svg"
                    alt=""
                    fill
                    className="object-cover opacity-60"
                    // priority
                    loading="lazy"
                />
            </div>



            {/* HERO CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-15 md:py-20 text-center">

                {/* BADGE */}
                <div className="mb-6 flex justify-center">
                    <span className="rounded border border-gray-300 px-4 py-1 text-xs font-semibold tracking-widest text-gray-600">
                        &lt;&gt; CREATIVE AGENCY &lt;&gt;
                    </span>
                </div>

                {/* HEADING */}
                <h1 className="mx-auto max-w-4xl text-4xl font-extrabold sm:text-5xl">
                    <span className="text-black">Designing Digital </span>
                    <span className="text-brand">Experiences that Convert</span>
                </h1>

                {/* TEXT */}
                <p className="mx-auto mt-6 max-w-2xl text-gray-600">
                    Whether you need a custom website or ready-made templates,
                    we design experiences that look good and work even better
                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-row gap-4  justify-center">
                    <Link className="rounded-md bg-orange-500 px-6 py-3 text-white shadow-md" href="#">
                        Let’s Build Something
                    </Link>
                    <Link className="rounded-md bg-black px-6 py-3 text-white shadow-md" href="#">
                        Explore Our Work
                    </Link>
                </div>

                {/* TRUST SECTION */}
                {/* <div className="mt-16">

                   
                    <div className="flex items-center justify-center gap-6">
                        <span className="h-px w-20 bg-gray-300"></span>

                        <p className="text-xs font-semibold tracking-widest text-gray-500">
                            TRUSTED BY 50+ GROWING COMPANIES
                        </p>

                        <span className="h-px w-20 bg-gray-300"></span>
                    </div>

                   
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-gray-600">
                        <span className="font-semibold">ACME Corp</span>
                        <span className="font-semibold">GlobalNews</span>
                        <span className="font-semibold">StarkInd</span>
                        <span className="font-semibold italic">Veritas</span>
                    </div>

                </div> */}


                {/* TRUST SECTION */}
                <div className="mt-16">

                    {/* LINE + TEXT */}
                    <div className="flex items-center justify-center gap-6">
                        <span className="h-px w-20 bg-gray-300"></span>

                        <p className="text-xs font-semibold tracking-widest text-gray-500">
                            TRUSTED BY 50+ GROWING COMPANIES
                        </p>

                        <span className="h-px w-20 bg-gray-300"></span>
                    </div>

                    {/* LOGOS */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
                        <Image
                            src="/images/logos/acme.webp"
                            alt="ACME Corp"
                            width={110}
                            height={40}
                            className="opacity-70"
                            loading="lazy"
                        />

                        <Image
                            src="/images/logos/globalnews.webp"
                            alt="GlobalNews"
                            width={130}
                            height={40}
                            className="opacity-70"
                            loading="lazy"
                        />

                        <Image
                            src="/images/logos/starkind.webp"
                            alt="StarkInd"
                            width={120}
                            height={40}
                            loading="lazy"
                            className="opacity-70"
                        />

                        <Image
                            src="/images/logos/veritas.webp"
                            alt="Veritas"
                            width={110}
                            height={40}
                            className="opacity-70"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
