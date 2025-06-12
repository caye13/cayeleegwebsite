// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const bgColor = '#3B3330'; 
  const textColor = '#5A4D4A';
  const linkColor = '#5A4D4A'; 
  const heartColor = '#E57373';

  return (
    <footer
        className="py-9 px-4 mt-20 text-center transition-colors duration-300
                bg-white text-gray-800
                dark:bg-gray-800 dark:text-gray-100"
    //   style={{ backgroundColor: bgColor, color: textColor }}
    >
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <div className="text-xl font-semibold">
            made with <span style={{ color: heartColor }}>&hearts;</span> by caye
        </div>

        {/* nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg">
          <Link href="/" className="hover:font-bold" style={{ color: linkColor }}>
            home
          </Link>
          <Link href="/interests" className="hover:font-bold" style={{ color: linkColor }}>
            interests
          </Link>
          <Link href="/photos" className="hover:font-bold" style={{ color: linkColor }}>
            photos
          </Link>
          <Link href="/notes" className="hover:font-bold" style={{ color: linkColor }}>
            notes
          </Link>
          <Link href="/contact" className="hover:font-bold" style={{ color: linkColor }}>
            contact
          </Link>
        </nav>
        <div className="flex space-x-7 text-3xl">
          <a className="icon-glow" href="https://x.com/cayeleeg" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: linkColor }}>
            <i className="bi bi-twitter"></i>
          </a>
          <a className="icon-glow" href="https://www.linkedin.com/in/caye-lee-b21540229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: linkColor }}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="icon-glow" href="https://github.com/caye13" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: linkColor }}>
            <i className="bi bi-github"></i>
          </a>
          <a className="icon-glow" href="mailto:cayeleeg@gmail.com" target='_blank' rel="noopener noreferrer" aria-label="Email" style={{ color: linkColor }}>
            <i className='bi bi-envelope-fill' style={{ color: linkColor }}></i>
          </a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Caye Lee's Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;