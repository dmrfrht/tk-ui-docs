"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const BadgePage: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Badge Bileşeni</h1>
      <p className="text-gray-600 mb-6 text-lg">
        Badge bileşeni, genellikle bir UI elementinin yanında ekstra bilgi vermek için kullanılan
        bir arayüz öğesidir. Aktiflik, bildirim sayısını belirtme, uyarı vb. durumları belirtmek için kullanılabilir.
        Kullanıcı deneyimini artırmak için farklı stiller ve ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Badge>Gidiş</Badge>`}
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
          code: `<Badge>Gidiş</Badge>`,
          badgeClass: "bg-red-500 text-white text-center max-w-max min-w-32 px-[16px] pt-[5px] pb-[4px]",
          label: "GİDİŞ"
        }].map(({ title, code, badgeClass, label }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
            <div className={`${badgeClass} mt-5`}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgePage;