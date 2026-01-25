import Image from "next/image";

export default function OurStory() {
    return (
        <section className="bg-[#efeeeb]  px-4 border-t border-white">
            <div className="mx-auto  max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="mb-2">
                        <div className="rounded-2xl bg-white p-6 md:p-10 mt-10">
                            <p className="mb-2 md:text-3xl text-lg font-bold text-orange-500">
                                Our <span className="text-black">Story</span>
                            </p>

                            <h2 className="mb-5 text-2xl font-semibold leading-snug text-gray-600 md:text-4xl">
                                We’re providing quality service since 2018!
                            </h2>

                            <p className="mb-4 text-md text-black">
                                <strong>Parvati and Sons</strong>, an IT company headquartered in
                                Uttarakhand, was founded in 2018 with a mission to provide
                                automation solutions for startups, small businesses, and
                                enterprises.
                            </p>

                            <p className="mb-8 text-md text-orange-500">
                                Since then, we have successfully completed numerous projects
                                across various cities in India, staying true to our vision.
                            </p>

                            <button className="rounded-lg bg-black px-5 py-3 text-md text-white">
                                Know more about us →
                            </button>
                        </div>
                    </div>


                    {/* RIGHT SCROLL AREA */}
                    <div
                        className="
              relative
              flex
              gap-6
              overflow-x-auto
              pb-4
              snap-x snap-mandatory
              lg:h-[520px]
              lg:flex-col
              lg:overflow-y-auto
              lg:overflow-x-hidden
              lg:snap-y
            "
                    >
                        <StoryImage src="/images/13.png" />
                        <StoryImage src="/images/14.png" />
                        <StoryImage src="/images/7.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}


function StoryImage({ src }) {
    return (
        <div
            className="
        snap-center
        shrink-0
        w-[85%]
        sm:w-[70%]
        lg:w-full
        lg:h-[320px]
        overflow-hidden
        rounded-2xl
        bg-white
      "
        >
            <Image
                src={src}
                alt="Project preview"
                width={600}
                height={350}
                className="h-full w-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 600px"
            />
        </div>
    );
}
