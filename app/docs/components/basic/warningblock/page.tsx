"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import WarningBlock from "../../../../../components/tk-ui/WarningBlock";

const WarningBlockPage: React.FC = () => {
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
        WarningBlock Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        WarningBlock bileşeni, kullanıcılara uyarı mesajları ve bu mesajla
        beraber bir buton gösterme işlevi ile kullanılır. Genelde detaylı bilgi
        içeren sayfalara yönlendirmede kullanılır deneyimini artırmak için
        farklı stiller ve ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<WarningBlock buttonText="Daha fazla bilgi" 
onClick={handleClick} 
warning="Bagaj hakları ile ilgili sorunları önlemek 
adına bagaj düzenlemelerini inceleyiniz." />`}
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
            code: `<WarningBlock buttonText="Daha fazla bilgi" 
onClick={handleClick} 
warning="Bagaj hakları ile ilgili sorunları önlemek 
adına bagaj düzenlemelerini inceleyiniz." />`,
            warningBlockClass:
              "flex gap-[12px] border-[1px] border-[#c3cbd7] p-[15px] px-[15.6px] text-[14px] items-center mt-[30px]",
            warning:
              "Bagaj hakları ile ilgili sorunları önlemek adına bagaj düzenlemelerini inceleyiniz.",
            buttonText: "Daha fazla bilgi",
            onClick: () => {},
          },
        ].map(({ title, code, warning, buttonText, onClick }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />

            <div className="mt-5">
              <WarningBlock
                warning={warning}
                buttonText={buttonText}
                onClick={onClick}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarningBlockPage;
