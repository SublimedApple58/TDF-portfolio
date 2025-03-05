import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss how we can create something amazing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Contact Information</h3>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:tizianofelice@gmail.com" 
                    className="flex items-start group p-4 rounded-lg transition-colors hover:bg-zinc-700/50"
                  >
                    <div className="bg-emerald-400/10 p-3 rounded-lg mr-4">
                      <Mail className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 group-hover:text-emerald-400 transition-colors">Email</h4>
                      <p className="text-zinc-300">tizianofelice@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+393459191272" 
                    className="flex items-start group p-4 rounded-lg transition-colors hover:bg-zinc-700/50"
                  >
                    <div className="bg-emerald-400/10 p-3 rounded-lg mr-4">
                      <Phone className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 group-hover:text-emerald-400 transition-colors">Phone</h4>
                      <p className="text-zinc-300">+39 345 919 12 72</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start group p-4 rounded-lg">
                    <div className="bg-emerald-400/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-zinc-300">Abruzzo, Italy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Connect With Me</h3>
                <p className="text-zinc-300 mb-8">
                  Follow me on social media to stay updated with my latest projects and tech insights.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/SublimedApple58" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-emerald-400/10 transition-colors group"
                  >
                    <Github className="mr-3 text-emerald-400" size={24} />
                    <span className="font-medium group-hover:text-emerald-400 transition-colors">GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/tiziano-di-felice-b2280b286" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-zinc-700/50 rounded-lg hover:bg-emerald-400/10 transition-colors group"
                  >
                    <Linkedin className="mr-3 text-emerald-400" size={24} />
                    <span className="font-medium group-hover:text-emerald-400 transition-colors">LinkedIn</span>
                  </a>
                </div>

                <div className="mt-8 p-4 bg-emerald-400/10 rounded-lg">
                  <p className="text-emerald-400 font-medium">Available for Opportunities</p>
                  <p className="text-zinc-300 mt-2">
                    Always open to hearing what you have to propose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;