"use client";

import { useState, useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-xl font-bold">TKUI Design System</h1>
      <nav className="flex items-center space-x-4">
        <Link href="/docs" className="text-black dark:text-white">Docs</Link>
        <a href="#" className="text-black dark:text-white">Blog</a>
        <a href="#" className="text-black dark:text-white">Guides</a>
        <a href="#" className="text-black dark:text-white">
          <FaGithub size={20} />
        </a>
        <button onClick={toggleDarkMode} className="text-black dark:text-white">
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>
    </header>
  );
}

export default Header; 