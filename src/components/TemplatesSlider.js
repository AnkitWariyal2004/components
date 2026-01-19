import Image from "next/image";

const templates = [
  { id: 1, img: "/images/sample.webp" },
  { id: 2, img: "/images/templates/t2.webp" },
  { id: 3, img: "/images/templates/t3.webp" },
  { id: 4, img: "/images/templates/t4.webp" },
  { id: 5, img: "/images/templates/t5.webp" },
  { id: 6, img: "/images/templates/t6.webp" },
];

export default function TemplatesSlider() {
  return (
    <section className="bg-[#f7f6f3] py-2 border-b border-white">
      <div className="">

        {/* SCROLLER */}
        <div className="relative">
      

          <div
            className="
              flex gap-4 overflow-x-auto pb-2
              scroll-smooth
              snap-x snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              backdrop-filter: blur(10px);
            "
          >
            {templates.map((item) => (
              <div
                key={item.id}
                className="
                  snap-left
                  min-w-[280px]
                  sm:min-w-[360px]
                  lg:min-w-[420px]
                  rounded-2xl
                  p-4
                  shadow-md
                "
              >
                <div className="overflow-hidden rounded-xl bg-back">
                  <Image
                    src={"/images/sample.webp"}
                    alt="Template preview"
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className="
              flex gap-4 overflow-x-auto pb-2
              scroll-smooth
              snap-x snap-mandatory
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              backdrop-filter: blur(10px);
            "
          >
            {templates.map((item) => (
              <div
                key={item.id}
                className="
                  snap-right
                  min-w-[280px]
                  sm:min-w-[360px]
                  lg:min-w-[420px]
                  rounded-2xl
                  p-4
                  shadow-md
                "
              >
                <div className="overflow-hidden rounded-xl bg-back">
                  <Image
                    src={"/images/sample.webp"}
                    alt="Template preview"
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
