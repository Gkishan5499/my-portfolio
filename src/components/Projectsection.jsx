// src/components/ProjectsSection.jsx
import { projects } from "../data/projects";
import { GithubIcon, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, cardHover } from "../animation/variants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ProjectsSection() {
  return (
    <div className="w-full">
      {/* Projects Grid with Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                {/* Project Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                          >
                            <GithubIcon className="w-6 h-6 text-white" />
                          </a>
                        )}
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Globe className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 text-sm font-medium backdrop-blur-sm">
                        {project.type || 'Web App'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-lg lg:text-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <Globe className="w-5 h-5" />
                      View Live Project
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <GithubIcon className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex items-center justify-center mt-12 space-x-4">
        <button className="swiper-button-prev custom-swiper-button">
          <span className="sr-only">Previous project</span>
        </button>
        
        <div className="swiper-pagination custom-swiper-pagination "></div>
        
        <button className="swiper-button-next custom-swiper-button">
          <span className="sr-only">Next project</span>
        </button>
      </div>
    </div>
  );
}
