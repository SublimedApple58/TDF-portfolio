import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-950 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-emerald-400">T</span>
              <span>DF</span>
            </div>
            <p className="text-zinc-400 mt-2">
              Front-End Developer & UI/UX Designer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-zinc-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} Tiziano Di Felice. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;