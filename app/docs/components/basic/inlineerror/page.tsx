"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsExclamationTriangleFill } from "react-icons/bs";

const InlineErrorPage: React.FC = () => {
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
        Inline Error Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        InlineError elementi, kullanıcıya önemli bilgileri, uyarılara dikkat
        çekmek için kullanılır. Kullanıcı deneyimini artırmak için farklı
        stiller ve ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<InlineError>Bir hata oluştu</InlineError>`}
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
            code: `<InlineError>Bir hata oluştu</InlineError>`,
            inlineErrorClass: "flex items-start gap-[6px] mt-5",
            iconClass: "text-red-500 text-primary text-sm flex-shrink-0",
            label: "Bir hata oluştu",
          },
        ].map(({ title, code, label, inlineErrorClass, iconClass }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />
            <div className={`${inlineErrorClass} mt-5 flex items-center`}>
              {<BsExclamationTriangleFill className={iconClass} />}
              <small className="text-black text-xs">{label}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineErrorPage;
