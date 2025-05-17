import React from 'react';
import { Lightbulb, Code, BookOpen } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className={`w-20 h-1.5 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-10 leading-relaxed">
            I'm a passionate Junior Python Full Stack Developer with expertise in building web applications
            from concept to deployment. With a strong foundation in both frontend and backend technologies,
            I create efficient, scalable, and user-friendly solutions to complex problems.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-transform hover:scale-105`}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${darkMode ? 'bg-blue-400/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Learner</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I adapt quickly to new technologies and environments, embracing challenges as opportunities for growth.
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-transform hover:scale-105`}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${darkMode ? 'bg-blue-400/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I enjoy tackling complex challenges and finding elegant, efficient solutions through code.
              </p>
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-transform hover:scale-105`}>
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${darkMode ? 'bg-blue-400/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Currently enhancing my skills in AI technologies to build more intelligent applications.
              </p>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
            <h3 className="text-xl font-semibold mb-4">Professional Philosophy</h3>
            <p className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and creating applications that not only solve problems 
              but also provide exceptional user experiences. My adaptability allows me to quickly master new 
              frameworks and languages as needed for any project, making me a versatile asset to any development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;