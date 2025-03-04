import React, { useEffect, useRef } from 'react';
import { Code, Palette, Lightbulb } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="./tdf.JPG" 
                  alt="Tiziano Di Felice" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-emerald-400 rounded-lg"></div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-4">Front-End Developer & UI/UX Designer</h3>
            <p className="text-zinc-300 mb-6">
              I'm a passionate front-end developer engaged in creating 
              engaging and intuitive user interfaces. My journey in web development 
              started with a curiosity about how websites work and evolved into a 
              deep passion for crafting exceptional digital experiences.
            </p>
            <p className="text-zinc-300 mb-8">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices. When I'm not coding, you can 
              find me exploring new design trends (or in the gym), contributing to open-source projects, 
              or enjoying a good cup of coffee.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Based in Milan, Italy</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Available for Freelance</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">•</span>
                <span>Remote Work Preferred</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2">•</span>
                <span>English & Italian Speaker</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-zinc-700 p-6 rounded-lg animate-on-scroll opacity-0">
            <div className="text-emerald-400 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Clean Code</h3>
            <p className="text-zinc-300">
              I write maintainable, scalable, and well-documented code following best practices and industry standards.
            </p>
          </div>
          
          <div className="bg-zinc-700 p-6 rounded-lg animate-on-scroll opacity-0">
            <div className="text-emerald-400 mb-4">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Creative Design</h3>
            <p className="text-zinc-300">
              I combine aesthetics with functionality to create visually appealing and user-friendly interfaces.
            </p>
          </div>
          
          <div className="bg-zinc-700 p-6 rounded-lg animate-on-scroll opacity-0">
            <div className="text-emerald-400 mb-4">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Problem Solver</h3>
            <p className="text-zinc-300">
              I approach challenges with a solution-oriented mindset, finding efficient ways to overcome obstacles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;