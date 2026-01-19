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

        {/* WRAPPER */}
        <div className="rounded-2xl bg-[#efeeeb] p-4 md:p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">

            {/* Client Satisfaction */}
            <div className="rounded-xl bg-white p-4 md:p-5">
              <h3 className="text-sm font-semibold">
                Client Satisfaction Focused
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                We continuously improve design quality through feedback and
                testing.
              </p>

              <div className="mt-4 flex gap-2 items-bottom justify-center h-full">
                {["😐", "🙁", "🙂", "😄", "😁"].map((i) => (
                  <span
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Solves Problems */}
            <div className="md:col-span-2 rounded-xl bg-white p-4 md:p-5">
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
            </div>

            {/* CTA */}
            <div className="rounded-xl bg-[#ffb347] p-5">
              <h3 className="text-sm font-semibold">
                Let’s Build Something Great
              </h3>
              <p className="mt-1 text-xs">
                Have an idea or need a redesign?
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-xs text-white"
              >
                Schedule a Free 20-Min Call
              </Link>
            </div>

            {/* SEO */}
            <div className="md:col-span-2 rounded-xl bg-white p-4 md:p-5">
              <h3 className="text-sm font-semibold">
                SEO Ready & Fast Performance
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Optimized for rankings and speed.
              </p>

              <div className="mt-4 flex justify-around">
                {[
                  { v: "99%", l: "PERFORMANCE" },
                  { v: "100%", l: "SEO" },
                  { v: "99%", l: "ACCESSIBILITY" },
                ].map((i) => (
                  <div key={i.l} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand text-xs font-semibold">
                      {i.v}
                    </div>
                    <p className="mt-1 text-[10px] text-gray-500">{i.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div className="rounded-xl bg-white p-4 lg:p-5 md:col-span-2">
              <h3 className="text-sm font-semibold">
                Strategy Before Screens
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Research-backed design decisions.
              </p>

              <Image
                src="/images/sample.webp"
                alt="Strategy"
                width={400}
                height={200}
                className="mt-3 w-full rounded-lg object-cover md:h-[160px]"
                loading="lazy"
              />
            </div>

            {/* Case Study */}
            <div className="rounded-xl bg-white p-4 md:p-5">
              <h3 className="text-sm font-semibold">Recent Case Study</h3>
              <p className="mt-1 text-xs text-gray-600">
                From concept to final interface.
              </p>

              <Image
                src="/images/sample.webp"
                alt="Case Study"
                width={400}
                height={200}
                className="mt-3 w-full rounded-lg object-fit md:h-[160px]"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
