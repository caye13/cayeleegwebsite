// components/Cursor.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const leftPosition = e.pageX + 4;
      const topPosition = e.pageY + 4;
      cursor.style.left = leftPosition + "px";
      cursor.style.top = topPosition + "px";
    };

    // Add mouse move listener
    document.addEventListener("mousemove", handleMouseMove);

    // Get all nav links
    const links = document.querySelectorAll("nav ul li a");
    const navlinks = document.querySelectorAll("nav ul li");

    // Add hover effects to links
    const handleMouseEnter = () => setIsLarge(true);
    const handleMouseLeave = () => setIsLarge(false);

    links.forEach(link => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    // Apply animation delays to nav items
    navlinks.forEach((li, i) => {
      const element = li as HTMLElement;
      element.style.animationDelay = (i * 140) + "ms";
    });

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`cursor fixed pointer-events-none z-50 w-4 h-4 bg-green-800 rounded-full transition-transform duration-200 ${
          isLarge ? 'scale-150' : 'scale-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Global styles for cursor */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default Cursor;