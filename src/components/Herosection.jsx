import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import kishan from '../assets/phosto.jpeg';
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;

      if (imageRef.current) {
        imageRef.current.classList.toggle('scrolled', scrollY > threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center pt-20 pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-title leading-tight">
                Hi, I'm <br />
                <span className="text-white">Kishan Gautam</span>
              </h1>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I'm a passionate Web Developer with over 2 years of experience
                building high-quality websites and mobile applications.
                I love turning ideas into reality through clean, efficient code.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              <a
                href="https://github.com/Gkishan5499"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full p-3 bg-white/10 hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white group"
              >
                <GithubIcon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/kishan-kumar-gautam-4700751a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full p-3 bg-white/10 hover:bg-blue-500 transition-all duration-300 border border-white/20 hover:border-blue-500 group"
              >
                <LinkedinIcon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full p-3 bg-white/10 hover:bg-blue-400 transition-all duration-300 border border-white/20 hover:border-blue-400 group"
              >
                <TwitterIcon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a href='#contact'>
                <Button size="lg" className="px-8 py-3 bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
             
              <Button size="lg" variant="outline" className="px-8 py-3 border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group">
                <a href="/resume.pdf" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="hero-image-wrapper flex justify-center order-1 lg:order-2">
            <div
              ref={imageRef}
              className="hero-image transition-all duration-700 ease-in-out relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-all duration-700 group-hover:blur-2xl"></div>
              
              {/* Image container */}
              <div className="relative">
                <img
                  src={kishan}
                  alt="Kishan Gautam"
                  className="rounded-2xl shadow-2xl border border-white/20 max-w-full h-auto w-80 md:w-96 lg:w-[420px] transition-all duration-700 group-hover:scale-105 group-hover:border-white/40"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-500 rounded-full animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
