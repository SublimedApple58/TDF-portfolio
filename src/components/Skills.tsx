import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const technicalSkills = [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'Redux', level: 90 },
    { name: 'Jotai', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5/CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'GraphQL', level: 75 },
    { name: 'Node.js', level: 70 },
  ];

  const softSkills = [
    'UI/UX Design',
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Creative Thinking',
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career, focusing on front-end technologies and UI/UX design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-zinc-900 mr-3">
                1
              </span>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-zinc-900 mr-3">
                2
              </span>
              Soft Skills & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded-full border border-zinc-700 hover:border-emerald-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Development Workflow</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold mb-1">Planning & Research</h4>
                  <p className="text-zinc-400">Understanding requirements and researching best approaches</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-1">Design & Prototyping</h4>
                  <p className="text-zinc-400">Creating wireframes and interactive prototypes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-1">Development</h4>
                  <p className="text-zinc-400">Writing clean, maintainable, and efficient code</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-emerald-400 mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold mb-1">Testing & Optimization</h4>
                  <p className="text-zinc-400">Ensuring quality and performance across devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;