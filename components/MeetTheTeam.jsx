import Image from "next/image";

const teamMembers = [
  {
    name: "Vishal Kumar",
    role: "Founder & Lead Designer",
    image: "/images/20.png",
  },
  {
    name: "Neha Verma",
    role: "Product & Research Designer",
    image: "/images/21.png",
  },
  {
    name: "Rohan Mehta",
    role: "Brand & Visual Designer",
    image: "/images/22.png",
  },
  {
    name: "Nancy",
    role: "UI/UX Designer",
    image: "/images/23.png",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="px-4 py-3 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 text-center ">
          <h2 className="text-lg font-bold text-black md:text-3xl">
            Meet the <span className="text-brand">Team</span>
          </h2>
          <p className="mt-2 text-md leading-tight text-gray-500">
            A small, focused team passionate about creating meaningful digital
            experiences
          </p>
        </div>

        {/* TEAM CARDS */}
        <div className="rounded-3xl p-2 bg-[#ebeae8] ">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* IMAGE */}
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={360}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-2xl font-bold text-black">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-md font-base text-brand">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
