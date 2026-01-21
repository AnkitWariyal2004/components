import Image from "next/image";
import Link from "next/link";

const templates = [
  {
    id: 1,
    title: "SaaS Website Template",
    desc: "Clean, conversion-focused layout designed for startups and product teams.",
     img: "/images/7.png",
  },
  {
    id: 2,
    title: "Agency Portfolio Template",
    desc: "A minimal portfolio system built to showcase work and attract clients.",
      img: "/images/13.png",
  },
  {
    id: 3,
    title: "Landing Page Template",
    desc: "High-impact landing pages optimized for clarity, speed, and results.",
      img: "/images/14.png",
  },
  {
    id: 4,
    title: "UI Kit & Design System",
    desc: "Reusable components and styles for scalable product design.",
     img: "/images/15.png",
  },
];

export default function TemplatesSection() {
  return (
    <section className="py-15">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            Ready-to-Use{" "}
            <span className="text-brand">Templates</span>
          </h2>

          <Link
            href="/templates"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-black px-5 py-2 text-sm text-white"
          >
            Browse all template →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {templates.map((item) => (
            <article key={item.id} className="group">

              {/* IMAGE CARD */}
              <div className="overflow-hidden rounded-md shadow-md p-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={600}
                  className="w-full object-cover "
                  loading="lazy"
                />
              </div>

              {/* TEXT */}
              <h3 className="mt-4 text-base font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                {item.desc}
              </p>

            </article>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2 text-sm text-white"
          >
            Browse all template →
          </Link>
        </div>

      </div>
    </section>
  );
}
