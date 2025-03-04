"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsAirplaneFill } from "react-icons/bs";
import Divider from "../../../../../components/tk-ui/Divider";

const DividerPage: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        Divider Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Divider bileşeni, içerik bölümlerini görsel olarak ayırmak için
        kullanılan bir UI bileşenidir. Genellikle çizgi (horizontal veya
        vertical) olarak gösterilir ve kullanıcı deneyimini iyileştirmek için
        sayfa düzenine eklenir. Kullanıcı deneyimini artırmak için farklı
        stiller ve ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Divider />`}
          language="jsx"
          showLineNumbers
          theme={dracula}
          wrapLines
        />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-700">Örnekler</h2>
      <div className="space-y-8">
        {[
          {
            title: "Varsayılan Kullanım",
            code: `<Divider />`,
            orientation: "horizontal",
          },
          {
            title: "İkon ile Kullanım",
            code: `<Divider icon={<BsAirplaneFill />} />`,
            orientation: "horizontal",
            icon: <BsAirplaneFill />,
          },
          {
            title: "Dikey Kullanım",
            code: `<Divider orientation="vertical" />`,
            orientation: "vertical",
          },
        ].map(({ title, code, orientation, icon }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
            <Divider orientation={orientation} icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DividerPage;
