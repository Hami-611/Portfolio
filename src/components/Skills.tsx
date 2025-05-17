import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const SkillBar: React.FC<{ name: string; level: number; darkMode: boolean }> = ({ name, level, darkMode }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`w-full h-2.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-2.5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillTag: React.FC<{ name: string; darkMode: boolean }> = ({ name, darkMode }) => {
  return (
    <span 
      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
        darkMode 
          ? 'bg-gray-700 text-blue-300' 
          : 'bg-blue-100 text-blue-800'
      }`}
    >
      {name}
    </span>
  );
};

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className={`w-20 h-1.5 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I continuously expand my skillset to stay current with emerging technologies, with a focus on Python and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
            <SkillBar name="Python" level={95} darkMode={darkMode} />
            <SkillBar name="Django" level={90} darkMode={darkMode} />
            <SkillBar name="Django Rest Framework" level={85} darkMode={darkMode} />
            <SkillBar name="Unit Test and PyTest" level={80} darkMode={darkMode} />
            <SkillBar name="JavaScript" level={85} darkMode={darkMode} />
            <SkillBar name="React.js" level={80} darkMode={darkMode} />
            <SkillBar name="SQL & Database Design" level={90} darkMode={darkMode} />
            <SkillBar name="Machine Learning Algorithms" level={75} darkMode={darkMode} />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="RESTful APIs" darkMode={darkMode} />
                <SkillTag name="Authentication" darkMode={darkMode} />
                <SkillTag name="MySQL" darkMode={darkMode} />
                <SkillTag name="Redis" darkMode={darkMode} />
                <SkillTag name="Celery" darkMode={darkMode} />
                
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="HTML5" darkMode={darkMode} />
                <SkillTag name="CSS3" darkMode={darkMode} />
                <SkillTag name="JavaScript" darkMode={darkMode} />
                <SkillTag name="React.js" darkMode={darkMode} />
                <SkillTag name="Redux Toolkit" darkMode={darkMode} />
                <SkillTag name="Responsive Design" darkMode={darkMode} />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Git" darkMode={darkMode} />
                <SkillTag name="Docker" darkMode={darkMode} />
                <SkillTag name="CI/CD" darkMode={darkMode} />
                <SkillTag name="AWS" darkMode={darkMode} />
                <SkillTag name="VS Code" darkMode={darkMode} />
                <SkillTag name="Postman" darkMode={darkMode} />
                <SkillTag name="Git & GitHub" darkMode={darkMode} />
                <SkillTag name="Testing" darkMode={darkMode} />
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Machine Learning</h4>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Classification Algorithms" darkMode={darkMode} />
                <SkillTag name="Regression Algorithms" darkMode={darkMode} />
                <SkillTag name="Clustering Algorithms" darkMode={darkMode} />
                <SkillTag name="Data Preprocessing" darkMode={darkMode} />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="Team Collaboration" darkMode={darkMode} />
                <SkillTag name="Problem Solving" darkMode={darkMode} />
                <SkillTag name="Time Management" darkMode={darkMode} />
                <SkillTag name="Communication" darkMode={darkMode} />
                <SkillTag name="Adaptability" darkMode={darkMode} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;