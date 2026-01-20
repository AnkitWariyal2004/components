"use clinet"
import Link from "next/link";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Templates from "../../components/Templates";
import TemplatesSlider from "../../components/TemplatesSlider";
import FeaturesSection from "../../components/FeaturesSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import PricingSection from "../../components/PricingSection";
import FaqSection from "../../components/FaqSection";
import { faqs } from "../data/faqs";
import LatestBlogs from "../../components/LatestBlogs";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* <Header /> */}
      <Header />
      <main>
        {/* Next sections will come here */}
        <Hero />
        <TemplatesSlider />
        <Templates />
        <section className="bg-[#f7f6f3] ">
          <div className="mx-auto max-w-7xl px-4">

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-16">

              {/* LEFT */}
              <div>
                <p className="text-2xl font-semibold">
                  Our <span className="text-brand font-bold">Story</span>
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight text-gray">
                  We’r providing quality <br />
                  service since 2018!
                </h2>
              </div>

              {/* RIGHT */}
              <div>
                <p className="font-semibold leading-tight text-black">
                  Parvati and Sons, an IT company headquartered in Uttarakhand, was
                  founded in 2018 with a mission to provide automation solutions for
                  startups, small businesses, and enterprises.
                </p>

                <p className="mt-2 font-semibold leading-tight text-brand">
                  Since then, we have successfully completed numerous projects
                  across various cities in India, staying true to our vision.
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="h-px flex-1 bg-gray-400"></span>

                  <Link
                    href="/about"
                    className="ml-6 inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm text-white"
                  >
                    Know more about us →
                  </Link>
                </div>
              </div>

            </div>

            {/* MOBILE CARD */}
            <div className="md:hidden rounded-2xl bg-white p-6 shadow-sm backdrop-filter: blur(10px);">

              <p className="text-2xl font-semibold">
                Our <span className="text-brand font-bold">Story</span>
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight text-gray">
                We’r providing quality service since 2018!
              </h2>

              <p className="mt-6 font-semibold leading-tight text-black">
                Parvati and Sons, an IT company headquartered in Uttarakhand, was
                founded in 2018 with a mission to provide automation solutions for
                startups, small businesses, and enterprises.
              </p>

              <p className="mt-4 font-semibold leading-tight text-black">
                Since then, we have successfully completed numerous projects across
                various cities in India, staying true to our vision.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm text-white"
              >
                Know more about us →
              </Link>

            </div>

          </div>
        </section>
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />

        <section
          className="mx-auto max-w-7xl py-12"
          aria-labelledby="final-cta-heading"
        >
          {/* Outer soft container */}
          <div className="rounded-2xl bg-[#F1EEEB] p-4">
            {/* Inner white card */}
            <div className="rounded-xl bg-white px-6 py-12 text-center md:px-12">
              <h2
                id="final-cta-heading"
                className="text-2xl font-semibold text-black md:text-3xl"
              >
                Let’s Build Something{" "}
                <span className="text-brand">Meaningful</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
                Have an idea or a project in mind? Let’s turn it into a clear,
                well-designed digital experience.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex  items-center justify-center gap-4 flex-row">
                <Link
                  href="/start-project"
                  className="rounded-md bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Start a Project
                </Link>

                <Link
                  href="/schedule-call"
                  className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Schedule a Free Call
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LatestBlogs/>

      </main>
      <Footer/>


    </>
  );
}


