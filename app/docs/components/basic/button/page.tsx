"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const ButtonPage: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Button Bileşeni</h1>
      <p className="text-gray-600 mb-6 text-lg">
        Button bileşeni, kullanıcıların bir eylemi tetiklemek için tıklayabileceği
        bir arayüz öğesidir. Formlar, diyaloglar ve etkileşimli öğelerde sıkça
        kullanılır. Kullanıcı deneyimini artırmak için farklı stiller ve ikon
        desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Button onClick={handleClick}>Tıkla</Button>`}
          language="jsx"
          showLineNumbers
          theme={dracula}
          wrapLines
        />
      </div>
      
      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-700">Örnekler</h2>
      <div className="space-y-8">
        {[{
          title: "Varsayılan Kullanım",
          code: `<Button>Keşfet</Button>`,
          buttonClass: "bg-red-500 text-white px-6 py-3 rounded",
          label: "Keşfet"
        }, {
          title: "Engellenmiş (Disabled) Buton",
          code: `<Button disabled>Keşfet</Button>`,
          buttonClass: "bg-gray-400 text-white px-6 py-3 rounded cursor-not-allowed",
          disabled: true,
          label: "Keşfet"
        }, {
          title: "Tam Genişlik (Full Width)",
          code: `<Button fullWidth>Keşfet</Button>`,
          buttonClass: "bg-red-500 text-white px-6 py-3 rounded w-full",
          label: "Keşfet"
        }, {
          title: "Şeffaf (Transparent) Buton",
          code: `<Button variant="transparent">Keşfet</Button>`,
          buttonClass: "bg-transparent border border-gray-600 text-gray-800 px-6 py-3 rounded",
          label: "Keşfet"
        }, {
          title: "Köşeleri Yuvarlatılmış (Rounded) Buton",
          code: `<Button rounded>Giriş Yap</Button>`,
          buttonClass: "bg-red-500 text-white px-6 py-3 rounded-full",
          label: "Giriş Yap"
        }, {
          title: "Metin Butonu (Text Button)",
          code: `<Button variant="text">Tüm Kampanyaları Göster</Button>`,
          buttonClass: "text-red-500 px-6 py-3",
          label: "Tüm Kampanyaları Göster"
        }].map(({ title, code, buttonClass, disabled, label }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
            <button className={`${buttonClass} mt-5`} disabled={disabled}>{label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonPage;