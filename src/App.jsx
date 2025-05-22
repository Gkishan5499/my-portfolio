

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
    <div>
      <Header />
      <div className="grid-background " />

      <HeroSection />

      {/* Features Section */}

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={cardHover.whileHover}
        id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            About Me
          </h2>
          <p className="text-lg font-medium text-gray-300 px-20 md:px-26 lg:px-40 xl:px-52 mb-10">
            I’m a passionate Frontend Developer with over 2 years of experience crafting user-centric web applications.
            From freelancing at Samnic Tech Pvt. Ltd. to interning at IBM,
            I’ve worked with diverse technologies like React JS, Firebase, MongoDB, WordPress, and Tailwind CSS.
            I thrive on clean UI, reusable components, and efficient coding practices.
            I enjoy turning complex problems into intuitive digital experiences and always strive to improve my skill set.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center">
                      <Icon className="w-10 h-10 mb-4 text-primary" />
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section variants={scaleIn} id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((item, index) => (


              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={cardHover.whileHover}
                className="flex flex-col items-center text-center space-y-4 border border-gray-600 rounded p-4 
                    transform transition duration-300 ease-in-out"
              >
                <h3 className="font-semibold text-xl">{item.title}</h3>
              </motion.div>

                
            
            ))}
        </div>
    </div>
      </motion.section >


    {/* Stats Section */ }
    {/* < motion.section className = "w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { number: "30+", label: "Websites" },
            { number: "5+", label: "Mobile App " },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Contact" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      </motion.section > */}

    {/* Experience */ }
    <motion.section id = "experience"
        className="w-full min-h-screen py-12" >
      <ExperienceTimeline/>
    </motion.section >


    {/* Projects Section */ }
    <motion.section  id="projects"
     variants={fadeIn}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
     
     className = "w-full py-12 md:py-24 lg:py-32 bg-background" >
      <ProjectsSection />
      </motion.section >

    {/* Testimonials */ }
    < motion.section className = "w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonial.map((testim, index) => (
            <Card key={index} className="pt-6">
              <CardContent>
                <div className="flex flex-col space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={testim.image}
                        alt={testim.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testim.author}</p>
                      <p className="text-sm text-muted-foreground">{testim.role}</p>
                      <p className="text-sm text-primary">{testim.company}</p>
                    </div>
                  </div>
                  <blockquote className="pt-2">
                    <p className="text-muted-foreground italic relative">
                      <span className="text-3xl text-primary absolute -top-4 -left-2">“</span>
                      {testim.quote}
                      <span className="text-3xl text-primary absolute -bottom-4">”</span>
                    </p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </motion.section >


    {/* Call to Action */ }
    < motion.section  id="contact">
    <FooterAnimation />
     </motion.section >
   
    </div >
  );
}
