

import { Card, CardContent } from "@/components/ui/card";

import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import { features } from "@/data/features"
import { howItWorks } from "@/data/howitworks";
import { testimonial } from "@/data/testimonials";
import { skills } from "@/data/skills";

import FooterAnimation from "./components/AnimationFooter";
import ProjectsSection from "./components/Projectsection";
import { motion } from 'framer-motion'
import { fadeIn, fadeInUp, scaleIn, cardHover } from "./animation/variants";
import ExperienceTimeline from "./components/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="grid-background" />

      <HeroSection />

      {/* About Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={cardHover.whileHover}
        id="about" 
        className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg md:text-xl font-medium text-gray-300 px-4 md:px-8 lg:px-16 xl:px-24 mb-16 text-center leading-relaxed max-w-5xl mx-auto"
          >
            I'm a passionate Frontend Developer with over 2 years of experience crafting user-centric web applications.
            From freelancing at Samnic Tech Pvt. Ltd. to interning at IBM,
            I've worked with diverse technologies like React JS, Firebase, MongoDB, WordPress, and Tailwind CSS.
            I thrive on clean UI, reusable components, and efficient coding practices.
            I enjoy turning complex problems into intuitive digital experiences and always strive to improve my skill set.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm hover:bg-white/10 group">
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        variants={scaleIn} 
        id="skills" 
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-gray-900/50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">My Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {skills.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={cardHover.whileHover}
                className="flex flex-col items-center text-center space-y-4 border border-white/10 rounded-xl p-6 
                    transform transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:scale-105 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors duration-300">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full min-h-screen py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-green-900/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              My professional journey and achievements
            </p>
          </motion.div>
          
          <ExperienceTimeline />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-gray-900/50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-blue-900/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Some of my recent work and creative solutions
            </p>
          </motion.div>
          
          <ProjectsSection />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-pink-900/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonial.map((testim, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        
                        <div>
                          <p className="font-semibold text-lg text-white">{testim.author}</p>
                          <p className="text-sm text-muted-foreground">{testim.role}</p>
                          <p className="text-sm text-primary">{testim.company}</p>
                        </div>
                      </div>
                      <blockquote className="pt-2">
                        <p className="text-muted-foreground italic relative leading-relaxed">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">"</span>
                          {testim.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">"</span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden"
      >
        <FooterAnimation />
      </motion.section>
    </div>
  );
}
