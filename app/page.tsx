"use client";

import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
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
    <div className="min-h-screen">
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-center mt-8">
          TKUI, ürünleri hızla oluşturmak için bir bileşen sistemidir
        </h1>
        <p className="text-center mt-4">
          Yüksek kaliteli web uygulamaları ve tasarım sistemleri oluşturmak için erişilebilir React bileşenleri.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded">
            Başlayın
          </button>
          <button className="bg-gray-300 text-black px-6 py-3 rounded">
            npm i tkui/react
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;