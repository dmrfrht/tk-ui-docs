"use client";
 
import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Tooltip } from "../../../../../components/tk-ui/Tooltip";
 
const TooltipPage: React.FC = () => {
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
        Tooltip Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">Tooltip, kullanıcı fareyle bir elementin üzerine geldiğinde ek bilgi veya açıklama sunan küçük bir kutudur. Genellikle butonlar, ikonlar veya bağlantılar üzerinde kullanılır. Kullanıcı deneyimini artırmak için farklı stiller ve ikon
        desteğiyle özelleştirilebilir.

</p>
 
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="top"
/>`}
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
            code: `<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="top"
/>`,
            content: "Business Class kabin sunulmuyor veya yer bulunmuyor.",
            id: "business",
            color: "dark",
            position: "top",
            mainElement: (
              <div
                data-tooltip="business"
                className="business mt-4 text-center bg-red-500 text-white w-50"
              >
                BUSINESS
              </div>
            ),
          },
          {
            title: "Aşağıda Gösterim Kullanım",
            code: `<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="bottom"
/>`,
            content: "Business Class kabin sunulmuyor veya yer bulunmuyor.",
            id: "businessBottom",
            color: "dark",
            position: "bottom",
            mainElement: (
              <div
                data-tooltip="businessBottom"
                className="businessBottom mt-4 text-center bg-red-500 text-white w-50"
              >
                BUSINESS
              </div>
            ),
          },
          {
            title: "Sağda Gösterim Kullanım",
            code: `<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="right"
/>`,
            content: "Business Class kabin sunulmuyor veya yer bulunmuyor.",
            id: "businessRight",
            color: "dark",
            position: "right",
            mainElement: (
              <div
                data-tooltip="businessRight"
                className="businessRight mt-4 text-center bg-red-500 text-white w-50"
              >
                BUSINESS
              </div>
            ),
          },
          {
            title: "Solda Gösterim Kullanım",
            code: `<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="left"
/>`,
            content: "Business Class kabin sunulmuyor veya yer bulunmuyor.",
            id: "businessLeft",
            color: "dark",
            position: "left",
            mainElement: (
              <div
                data-tooltip="businessLeft"
                className="businessLeft mt-4 text-center bg-red-500 text-white w-50"
              >
                BUSINESS
              </div>
            ),
          },
          {
            title: "Açık Tema Kullanım",
            code: `<Tooltip
content="Business Class kabin sunulmuyor veya yer bulunmuyor."
id="business"
type="bottom"
color="light"
/>`,
            content: "Business Class kabin sunulmuyor veya yer bulunmuyor.",
            id: "businessLight",
            color: "light",
            position: "bottom",
            mainElement: (
              <div
                data-tooltip="businessLight"
                className="businessLight mt-4 text-center bg-red-500 text-white w-50"
              >
                BUSINESS
              </div>
            ),
          },
        ].map(
          (
            { title, code, id, color, position, content, mainElement },
            index
          ) => {
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="mb-3 font-semibold text-gray-700">{title}</p>
                <CopyBlock
                  text={code}
                  language="jsx"
                  showLineNumbers
                  theme={dracula}
                  wrapLines
                />
 
                {mainElement}
 
                <Tooltip
                  title={title}
                  id={id}
                  position={position}
                  color={color}
                  content={content}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
 
export default TooltipPage;