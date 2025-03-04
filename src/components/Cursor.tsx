import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', updatePosition);
    window.addEventListener('mouseleave', () => setHidden(true));
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', updatePosition);
      window.removeEventListener('mouseleave', () => setHidden(true));
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const cursorClasses = `fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ${
    hidden ? 'opacity-0' : 'opacity-100'
  } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`;

  return (
    <>
      <div
        className={`${cursorClasses} w-8 h-8 border-2 border-white`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      <div
        className={`${cursorClasses} w-2 h-2 bg-white`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
};

export default Cursor;