import { Briefcase, PenLine } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation/variants";

const experienceData = [
  {
    role: "Web Developer(Freelance)",
    location: "Remote",
    date: "2023 - Present",
    description:
      "Developed responsive, performance-optimized websites and applications using React, Tailwind CSS, and WordPress.Delivered custom solutions for clients across industries, focusing on user experience and cross-browser compatibility.",
    icon: < Briefcase size = { 20} />,
  },
{
  role: " Web Developer Intern (IBM)",
    location: "Remote",
      date: " Sep 2021 – Feb 2022",
        description:
      "Contributed to the development and deployment of scalable frontend applications.Worked alongside senior developers to implement clean, intuitive UI using modern JavaScript frameworks.",
    icon: <Briefcase size={20} />,
  },
{
  role: "Bachelor of Computer Application (BCA)",
    location: "Varanasi, India",
      date: "2021 – 2024",
        description:
        "Gaining a strong foundation in computer science fundamentals, programming, data structures, and web development practices with a focus on real-world applications.",
        icon: <PenLine size={20} />,
  },
  {
  role: "Advanced Diploma in IT",
    location: "Kolkata, India",
      date: "2019 – 2021",
        description:
        "Completed a government-recognized program focused on hands-on IT skills, including web technologies, networking, and software development tools.",
        icon: <PenLine size={20} />,
  },
];


export default function ExperienceTimeline() {
  return (
    <div className=" text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-600 transform -translate-x-1/2"></div>

        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`mb-12 w-full flex ${isLeft ? 'justify-start' : 'justify-end'} relative z-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-gray-800 border-4 border-gray-600 rounded-full text-white z-20">
                {item.icon}
              </span>

              <div className={`relative w-1/2 ${isLeft ? 'pr-4' : 'pl-11'} flex flex-col items-${isLeft ? 'end' : 'start'}`}>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.role}</h3>
                  <p className="text-sm text-gray-400 mb-1">{item.location}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </motion.div>
                <p className="text-gray-400 text-sm mt-2">{item.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
