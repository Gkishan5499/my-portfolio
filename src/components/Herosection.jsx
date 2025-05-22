import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
// import banner from '../assets/banner-pic.png';
import kishan from '../assets/phosto.jpeg';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';


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
    <section className="w-full pt-32 pb-12 px-4 md:px-10 lg:px-18 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-title leading-tight">
            Hi, I’m <br /> Kishan Gautam
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl">
            I’m Kishan Kumar Gautam, a Web Developer with over 2 years of experience
            building high-quality websites and mobile applications.
          </p>

          <div className="flex space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/Gkishan5499"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full p-3 bg-white hover:bg-gray-200 transition"
            >
              <GithubIcon className="w-6 h-6 text-black" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kishan-kumar-gautam-4700751a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full p-3 bg-white hover:bg-blue-100 transition"
            >
              <LinkedinIcon className="w-6 h-6 text-blue-600" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full p-3 bg-white hover:bg-blue-200 transition"
            >
              <TwitterIcon className="w-6 h-6 text-blue-500" />
            </a>
          </div>


          <div className="flex flex-wrap gap-4">
            <a href='#contact'>
              <Button size="lg" className="px-8 bg-white text-black">
                Get Started
              </Button>
            </a>
           
              <Button size="lg" variant="outline" className="px-8">
               <a href="/resume.pdf">Download Resume</a>
              </Button>
            
          </div>
        </div>

        {/* Image Content */}
        <div className="hero-image-wrapper flex justify-center">
          <div
            ref={imageRef}
            className="hero-image transition-all duration-700 ease-in-out"
          >
            <img
              src={kishan}
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl border border-gray-600 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
