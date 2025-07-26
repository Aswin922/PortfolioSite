import Image from "next/image";

export default function TechStacks() {
  const stacks = [
    {
      name: "React",
      description:
        "I have started my web development journey with React and it was a good journey till this point",
      image: "/react.png",
    },
    {
      name: "Next",
      description:
        "Once I learned React, I felt something was missing there. Too much client side. At that point I took the Next step",
      image: "/next.jpg",
    },
    {
      name: "Java",
      description:
        "Felt like a master of programming. So I tried to master it",
      image: "/java.png",
    },
  ];

  return (
    <section className="py-16 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        TechStacks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <Image
              src={stack.image}
              alt={stack.name}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {stack.name}
            </h3>
            <p className="text-gray-300 text-sm">{stack.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}