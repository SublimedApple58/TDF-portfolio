import { useEffect, useRef } from 'react';
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
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-1/3 animate-on-scroll opacity-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-lg transform rotate-6 transition-transform group-hover:rotate-4"></div>
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 p-2">
                  <img 
                    src="./tdf.JPG" 
                    alt="Tiziano Di Felice" 
                    className="w-full aspect-square object-cover rounded-lg transform transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 animate-on-scroll opacity-0">
              <div className="bg-zinc-900/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Front-End Developer & UI/UX Designer</h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                I'm a passionate front-end developer specializing in React and Next.js, with a strong focus on creating seamless and high-performance user interfaces. My journey began with a deep curiosity for web technologies, which quickly turned into a drive to build scalable and efficient digital experiences. I thrive on solving complex UI challenges and continuously improving my skills to deliver top-tier front-end solutions.
                </p>
                <p className="text-zinc-300 mb-8 leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  the latest technologies and best practices. When I'm not coding, you can 
                  find me exploring new design trends, contributing to open-source projects, 
                  or simply in the gym.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Based in Abruzzo, Italy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Open mind as salvation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Remote Work Preferred</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>English & Italian Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg animate-on-scroll opacity-0 group hover:bg-zinc-900 transition-colors">
            <div className="text-emerald-400 mb-4 transform transition-transform group-hover:scale-110">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Clean Code</h3>
            <p className="text-zinc-300">
              I write maintainable, scalable, and well-documented code following best practices and industry standards.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg animate-on-scroll opacity-0 group hover:bg-zinc-900 transition-colors">
            <div className="text-emerald-400 mb-4 transform transition-transform group-hover:scale-110">
              <Palette size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Creative Design</h3>
            <p className="text-zinc-300">
              I combine aesthetics with functionality to create visually appealing and user-friendly interfaces.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-lg animate-on-scroll opacity-0 group hover:bg-zinc-900 transition-colors">
            <div className="text-emerald-400 mb-4 transform transition-transform group-hover:scale-110">
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