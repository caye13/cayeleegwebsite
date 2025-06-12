"use client";

import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark'));
  }, []);
  const toggleTheme = () => {
    const newMode = !isDarkMode; 
    setIsDarkMode(newMode);     
    document.body.classList.toggle('dark', newMode);
    console.log(`Theme toggled to: ${newMode ? 'Dark Mode' : 'Light Mode'}`);
  };
  const trackBgColor = isDarkMode ? '#071630' : '#ADD8E6'; 
  const trackBorderColor = isDarkMode ? '#PA5568' : '#CBD5E0'; 
  const inactiveIconColor = '#9CA3AF';
  const thumbLeftPosition = isDarkMode ? '44px' : '4px';

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center
        w-20 h-10 p-1 rounded-full
        transition-colors duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
      `}
      style={{
        backgroundColor: trackBgColor,
        borderColor: trackBorderColor,
      }}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {}
      <i
        className={`absolute left-2 text-2xl transition-colors duration-300
          ${!isDarkMode ? 'bi bi-sun-fill text-yellow-400' : 'bi bi-sun'}
        `}
        style={{ color: !isDarkMode ? '#F6E05E' : inactiveIconColor }} 
      ></i>

      {}
      <i
        className={`absolute right-2 text-2xl transition-colors duration-300
          ${isDarkMode ? 'bi bi-moon-stars-fill text-indigo-400' : 'bi bi-moon-stars'}
        `}
        style={{ color: isDarkMode ? '#A78BFA' : inactiveIconColor }}
      ></i>

      {}
      <span
        className={`
          absolute w-8 h-8 rounded-full shadow-lg bg-white opacity-30
          transform transition-all duration-300 ease-in-out
        `}
        style={{ left: thumbLeftPosition }}
      ></span>
    </button>
  );
}