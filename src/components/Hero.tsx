import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Python</span> Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Building modern web applications with Python and cutting-edge technologies
          </p>
          <p className={`text-lg mb-12 max-w-2xl opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Adaptable problem-solver with a passion for creating efficient, scalable solutions.
            Currently enhancing my skill set with AI technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                darkMode 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900 border border-gray-300'
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill={darkMode ? '#3B82F6' : '#2563EB'} 
            d="M44.9,-76.2C59.3,-69.2,72.9,-59.3,81.1,-45.8C89.4,-32.3,92.3,-15.2,89.8,0.9C87.3,17,79.4,32,69.9,45.7C60.3,59.4,49.1,71.8,34.9,77.8C20.7,83.8,3.5,83.3,-11.8,78.9C-27.1,74.5,-40.4,66.2,-52.1,55.6C-63.8,44.9,-73.9,32,-78,17.2C-82.1,2.4,-80.3,-14.2,-74.2,-28.8C-68.1,-43.3,-57.8,-55.8,-44.6,-63.4C-31.5,-71,-15.7,-73.8,-0.1,-73.6C15.5,-73.4,30.5,-83.3,44.9,-76.2Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Scroll Down</span>
          <ChevronDown className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
        </a>
      </div>
    </section>
  );
};

export default Hero;