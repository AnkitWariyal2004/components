import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Design That Actually Works",
    desc: "Why clarity, usability, and structure matter more than trends in modern design",
    image: "/images/blog-1.webp",
  },
  {
    id: 2,
    title: "From Strategy to Interface",
    desc: "How a strong design process leads to better products and fewer revisions",
    image: "/images/blog-2.webp",
  },
  {
    id: 3,
    title: "Minimal Design, Real Impact",
    desc: "How simplicity helps users focus, engage, and convert more effectively",
    image: "/images/blog-3.webp",
  },
];

export default function LatestBlogs() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 ">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold">
            Latest <span className="text-brand">Blogs</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Thoughts on design, usability, and building better digital products
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-[#efeeeb] p-4 md:p-5 p-3 shadow-sm">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* Image Wrapper (prevents CLS) */}
              <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={index === 0} // Only first image is LCP
                />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold">{blog.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{blog.desc}</p>

              <Link
                href="/blogs"
                className="mt-4 inline-block rounded-md bg-black px-4 py-2 text-xs font-medium text-white hover:bg-brand"
              >
                Know More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
