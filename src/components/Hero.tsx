import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const letters = text.innerText.split('');
    text.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = 'inline-block opacity-0 animate-fade-in';
      text.appendChild(span);
    });
  }, []);

  const handleScrollDown = () => {
    setActiveSection('about');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-emerald-400 font-mono mb-4 tracking-wider">Hello, I'm</p>
          <h1 ref={textRef} className="text-5xl md:text-7xl font-bold mb-6">
            Tiziano Di Felice
          </h1>
          <h2 className="text-3xl md:text-4xl text-zinc-300 font-light mb-8">
            Front-End Developer & React Specialist
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mb-10">
            I craft engaging digital experiences with clean, maintainable code.
            Specializing in React.js, JavaScript, Redux, and modern state management with Jotai.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('contact');
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('projects');
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-transparent border border-white hover:border-emerald-400 hover:text-emerald-400 font-medium rounded-md transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;