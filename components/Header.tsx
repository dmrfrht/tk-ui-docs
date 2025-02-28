"use client";

import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b border-gray-200 bg-white sticky top-0">
      <Link href="/"><h1 className="text-xl font-bold">TKUI Design System</h1></Link>
      <nav className="flex items-center space-x-4">
        <Link href="/docs" className="text-black">Docs</Link>
        <Link href="#" className="text-black">Blog</Link>
        <Link href="#" className="text-black">Guides</Link>
        <Link href="#" className="text-black"><FaGithub size={20} /></Link>
      </nav>
    </header>
  );
}

export default Header; 