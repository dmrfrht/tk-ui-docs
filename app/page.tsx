"use client";

import Image from "next/image";
import Logo from "../assets/thyLogo.png"

const Home: React.FC = () => {
  return (
    <div className="min-h-150 flex items-center justify-center">
      <main className="flex flex-row items-center justify-between p-8 gap-10">
        <div>
        <Image src={Logo} alt="Turkish Airlines" width={125} height={125} />
        </div>
        <div>
        <h1 className="text-4xl font-bold text-start mt-8">
          TKUI, ürünleri hızla oluşturmak için bir bileşen sistemidir
        </h1>
        <p className="text-start mt-4">
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
        </div>
      </main>
    </div>
  );
}

export default Home;