import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Redux", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Travel Planner App",
      description: "A mobile-first web application that helps users plan their trips, discover destinations, and create personalized itineraries.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Redux", "Jotai", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "A web application that allows users to track their workouts, set fitness goals, and monitor their progress over time.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "TypeScript", "Jotai", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Recipe Finder",
      description: "A web application that helps users discover recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      tags: ["React", "JavaScript", "Redux", "API Integration"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current conditions and forecasts for locations worldwide with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["JavaScript", "React", "Jotai", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Task Management System",
      description: "A collaborative task management platform with real-time updates, task assignment, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      tags: ["React", "Redux", "JavaScript", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filters = [
    'all',
    'React',
    'JavaScript',
    'Redux',
    'Jotai',
    'TypeScript',
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

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
  }, [filteredProjects]);

  useEffect(() => {
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.bg-emerald-400');
            progressBars.forEach((bar) => {
              const width = (bar as HTMLElement).dataset.width;
              if (width) {
                (bar as HTMLElement).style.width = width;
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('skills') as HTMLElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-white'
                  : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900 rounded-lg overflow-hidden group animate-on-scroll opacity-0"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-zinc-800 text-zinc-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;