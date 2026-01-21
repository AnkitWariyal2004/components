import Image from "next/image";

const templates1 = [
  { id: 1, img: "/images/7.png" },
  { id: 2, img: "/images/8.png" },
  { id: 3, img: "/images/9.png" },
  { id: 4, img: "/images/10.png" },
  { id: 5, img: "/images/11.png" },
];

const templates2 = [
  { id: 6, img: "/images/12.png" },
  { id: 7, img: "/images/13.png" },
  { id: 8, img: "/images/14.png" },
  { id: 9, img: "/images/15.png" },
  { id: 10, img: "/images/16.png" },
]

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
            {templates1.map((item) => (
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
                    src={item.img}
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
              snap-y
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              backdrop-filter: blur(10px);
            "
          >
            {templates2.map((item) => (
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
                    src={item.img}
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
