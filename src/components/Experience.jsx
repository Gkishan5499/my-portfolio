import { Briefcase, PenLine, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animation/variants";

const experienceData = [
  {
    role: "Web Developer (Freelance)",
    location: "Remote",
    date: "2023 - Present",
    description:
      "Developed responsive, performance-optimized websites and applications using React, Tailwind CSS, and WordPress. Delivered custom solutions for clients across industries, focusing on user experience and cross-browser compatibility.",
    icon: <Briefcase size={20} />,
    type: "work",
    company: "Samnic Tech Pvt. Ltd."
  },
  {
    role: "Web Developer Intern",
    location: "Remote",
    date: "Sep 2021 – Feb 2022",
    description:
      "Contributed to the development and deployment of scalable frontend applications. Worked alongside senior developers to implement clean, intuitive UI using modern JavaScript frameworks.",
    icon: <Briefcase size={20} />,
    type: "work",
    company: "IBM"
  },
  {
    role: "Bachelor of Computer Application (BCA)",
    location: "Varanasi, India",
    date: "2021 – 2024",
    description:
      "Gaining a strong foundation in computer science fundamentals, programming, data structures, and web development practices with a focus on real-world applications.",
    icon: <PenLine size={20} />,
    type: "education",
    company: "University"
  },
  {
    role: "Advanced Diploma in IT",
    location: "Kolkata, India",
    date: "2019 – 2021",
    description:
      "Completed a government-recognized program focused on hands-on IT skills, including web technologies, networking, and software development tools.",
    icon: <PenLine size={20} />,
    type: "education",
    company: "Technical Institute"
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="w-full">
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>

        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`mb-12 w-full flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative z-10`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white rounded-full text-white z-20 shadow-lg shadow-blue-500/25">
                {item.icon}
              </div>

              {/* Content card */}
              <div className={`relative w-full md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mt-6 md:mt-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/30 transition-all duration-500 ${
                    isLeft ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* Type badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    item.type === 'work' 
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {item.type === 'work' ? 'Work Experience' : 'Education'}
                  </div>

                  {/* Role and company */}
                  <h3 className="font-bold text-xl md:text-2xl mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.role}
                  </h3>
                  
                  <p className="text-blue-400 font-medium mb-3">
                    {item.company}
                  </p>

                  {/* Location and date */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse animation-delay-1000"></div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
