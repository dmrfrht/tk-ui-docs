"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import {
  BsAirplaneFill
} from "react-icons/bs";
import InfoBox from "../../../../../components/tk-ui/InfoBox";

const InfoBoxPage: React.FC = () => {
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
        InfoBox Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Infobox bileşeni, kullanıcılara önemli bilgiler veya yönlendirmeler
        sunmak amacıyla kullanılan görsel bir bileşendir. Genellikle kısa ve öz
        bilgi içerir ve genellikle uyarılar, bilgilendirmeler veya hatırlatmalar
        için tasarlanır. Kullanıcı deneyimini artırmak için farklı stiller ve
        ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<InfoBox variant="notification">Bilgi</InfoBox>`}
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
            title: "Varsayılan (Bilgilendirme) Kullanım",
            code: `<InfoBox variant="notification">Bilgi</InfoBox>`,
            label: "Bilgi",
            variant: "notification",
          },
          {
            title: "Uyarı Kullanımı",
            code: `<InfoBox variant="warning">Uyarı</InfoBox>`,
            label: "Uyarı",
            variant: "warning",
          },
          {
            title: "Hata Kullanımı",
            code: `<InfoBox variant="error">Hata</InfoBox>`,
            label: "Hata",
            variant: "error",
          },
          {
            title: "Özel İkon Kullanımı",
            code: `<InfoBox icon={</BsAirplaneFill />}>Özel İkon</InfoBox>`,
            icon: <BsAirplaneFill className="mr-[7px] text-blue-500" />,
            label: "Özel ikon",
          },
        ].map(({ title, code, label, icon, variant }, index) => (
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
              <InfoBox icon={icon} variant={variant}>
                {label}
              </InfoBox>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBoxPage;
