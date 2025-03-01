"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const LabelPage: React.FC = () => {
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
        Label Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Label bileşeni form elemanlarına açıklayıcı bir metin sağlamak için
        kullanılır. Kullanıcı deneyimini artırmak ve erişilebilirliği
        geliştirmek için önemli bir bileşendir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Label>Telefon Numarası</Label>`}
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
            code: `<Label>E-mail</Label>`,
            labelClass: "text-black mt-5",
            label: "E-mail",
          },
        ].map(({ title, code, label, labelClass }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
            <div className={labelClass}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelPage;
