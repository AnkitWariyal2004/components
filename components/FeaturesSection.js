import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="bg-[#f7f6f3] py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold">
            Features That Make the{" "}
            <span className="text-brand">Difference</span>
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Everything you need to design, launch, and scale with confidence.
          </p>
        </div>

        {/* OUTER WRAPPER */}
        <div className="rounded-2xl bg-[#efeeeb] p-4 md:p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-5">

            {/* Client Satisfaction */}
            <div className="rounded-xl bg-white p-4 md:p-5 md:col-span-2 flex flex-col items-center h-[300px]">
              <h3 className="text-md font-bold">
                Client Satisfaction Focused
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                We continuously improve design quality through feedback,
                iteration, and real-world testing.
              </p>

              <div className="md:mt-30 mt-25">
                <Image
                  src="/images/24.png"
                  alt="Client satisfaction"
                  width={260}
                  height={80}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Design That Solves Real Problems */}
            <div className="md:col-span-3 rounded-xl bg-white p-4 md:p-5 overflow-hidden">
              <h3 className="text-md font-bold text-center">
                Design That Solves Real Problems
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center max-w-xl mx-auto">
                We design with purpose, aligning user needs, business goals,
                and clean visuals to create meaningful digital experiences.
              </p>

              {/* IMAGE STACK */}
              {/* IMAGE STACK – FULLY RESPONSIVE */}
              <div className="relative mt-6 w-full max-w-5xl mx-auto aspect-[4/1] flex justify-center">

                {/* LEFT */}
                <div className="absolute left-[0%] z-10 w-[45%]  transform translate-y-[18%]">
                  <Image
                    src="/images/12.png"
                    alt="Design preview left"
                    width={3000}
                    height={120}
                    className="rounded-xl shadow-md w-full h-auto"
                    loading="lazy"
                  />
                </div>

                {/* CENTER (MAIN) */}
                <div className="absolute left-1/2 -translate-x-1/2 z-30 w-[55%]  transform translate-y-[5%]">
                  <Image
                    src="/images/7.png"
                    alt="Design preview center"
                    width={300}
                    height={120}
                    className="rounded-xl shadow-xl w-full h-auto"
                    priority
                  />
                </div>

                {/* RIGHT */}
                <div className="absolute right-[0%] z-20 w-[45%]  sm:block transform translate-y-[18%]">
                  <Image
                    src="/images/13.png"
                    alt="Design preview right"
                    width={300}
                    height={120}
                    className="rounded-xl shadow-lg w-full h-auto"
                    loading="lazy"
                  />
                </div>

              </div>

            </div>

            {/* CTA + SEO ROW */}
            <div className="md:col-span-5 grid gap-4 md:grid-cols-2">

              {/* CTA */}
              <div className="rounded-xl bg-[#ffb347] p-5 h-[250px] flex flex-col items-center justify-center text-center">
                <h3 className="text-md font-bold">
                  Let’s Build Something Great
                </h3>
                <p className="mt-1 text-sm">
                  Have an idea or need a redesign? Let’s discuss your project
                  and explore the best way forward.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded-md bg-black px-4 py-2 text-xs text-white"
                >
                  Schedule a Free 20-Min Call
                </Link>
              </div>

              {/* SEO */}
              <div className="rounded-xl bg-white p-4 md:p-5 flex flex-col items-center">
                <h3 className="text-md font-bold">
                  SEO Ready & Fast Performance
                </h3>
                <p className="mt-1 text-sm text-gray-600 text-center">
                  Optimized for search rankings and blazing-fast speed.
                </p>

                {/* TRIANGLE */}
                <div className="relative mt-8 flex justify-between w-full p-1 md:px-10">

                  <div className="relative top-7 md:top-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-brand text-md font-bold">
                      99%
                    </div>
                    <p className="mt-1 text-[10px] text-gray-500 font-semibold">
                      PERFORMANCE
                    </p>
                  </div>

                  <div className="relative -top-5 -md:top-3 text-center">
                    <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border-[5px] border-brand text-md font-bold">
                      100%
                    </div>
                    <p className="mt-1 text-[10px] text-gray-500 font-semibold">
                      SEO
                    </p>
                  </div>

                  <div className="relative top-7 md:top-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-brand text-md font-bold">
                      99%
                    </div>
                    <p className="mt-1 text-[10px] text-gray-500 font-semibold">
                      ACCESSIBILITY
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Strategy */}
            <div className="rounded-xl bg-white p-4 md:col-span-3 md:flex gap-6 h-[300px]">
              <div className="md:w-1/2">
                <h3 className="text-md font-bold">
                  Strategy Before Screens
                </h3>
                <p className="mt-1 text-sm">
                  Thoughtful design direction backed by research, structure,
                  and long-term vision, not just visuals.
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/18.png"
                  alt="Strategy board"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Case Study */}
            <div className="rounded-xl bg-white p-4 md:p-5 md:col-span-2 h-[300px] flex flex-col items-center overflow-hidden">
              <h3 className="text-md font-bold">
                Recent Case Study
              </h3>
              <p className="mt-1 text-sm text-center text-gray-600">
                A real project designed to solve real problems from concept
                to final interface, built with clarity and purpose.
              </p>

              <Image
                src="/images/7.png"
                alt="Case study"
                width={300}
                height={500}
                className="mt-3 rounded-lg object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}









{/* <div className="md:col-span-2 rounded-xl bg-white p-4 md:p-5">
              <h3 className="text-sm font-semibold">
                Design That Solves Real Problems
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Aligning user needs and business goals.
              </p>

              <Image
                src="/images/sample.webp"
                alt="Design preview"
                width={900}
                height={220}
                className="mt-3 w-full rounded-lg object-fit md:h-[180px]"
                loading="lazy"
              />
            </div> */}