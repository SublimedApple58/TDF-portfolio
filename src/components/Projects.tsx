import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  githubBackendUrl?: string;
  liveUrl: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Poker Texas Hold'em Simulator",
      description: "A sophisticated poker game simulator built with modern web technologies. Features include realistic gameplay mechanics, hand evaluation, and state management for an authentic poker experience.",
      image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "TypeScript", "Redux"],
      githubUrl: "https://github.com/SublimedApple58/poker",
      liveUrl: "https://poker-tiziano.netlify.app/"
    },
    {
      id: 2,
      title: "Giancola's Strength Academy",
      description: "A professional website for a bodybuilding coaching service. Features a modern UI, responsive design, and seamless integration between the front-end and back-end systems.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      githubUrl: "https://github.com/SublimedApple58/GSA",
      githubBackendUrl: "https://github.com/SublimedApple58/gsa-server",
      liveUrl: "https://giancola-academy.netlify.app/"
    },
  ];

  const filters = [
    'all',
    'React',
    'TypeScript',
    'Redux',
    'Node.js',
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            Here are my latest projects, showcasing my expertise in front-end development and full-stack capabilities.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll opacity-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group animate-on-scroll opacity-0"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-4 items-center justify-between">
                      <div className='flex gap-4'>
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors"
                          title="View Frontend Repository"
                        >
                          <Github size={20} />
                        </a>
                        {project.githubBackendUrl && (
                          <a 
                            href={project.githubBackendUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-full transition-colors"
                            title="View Backend Repository"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                      <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink size={20} />
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
                      className="text-xs px-3 py-1 bg-zinc-800 text-emerald-400 rounded-full"
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
            href="https://github.com/SublimedApple58" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors group"
          >
            <Github size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;