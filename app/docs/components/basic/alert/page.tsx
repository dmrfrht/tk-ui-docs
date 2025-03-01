"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsInfoCircleFill } from "react-icons/bs";

const AlertPage: React.FC = () => {
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
        Alert Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Alert elementi, kullanıcıya önemli bilgileri, uyarıları veya işlemlerin
        sonuçlarını bildirmek için kullanılır. Alertler, kullanıcı deneyimini
        geliştirmek ve etkileşimleri yönlendirmek amacıyla tasarlanır. Kullanıcı
        deneyimini artırmak için farklı stiller ve ikon desteğiyle
        özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Alert type="warning">Uyarı</Alert>`}
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
            title: "Varsayılan (Hata) Kullanım",
            code: `<Alert type="error">Hata</Alert>`,
            alertClass:
              "flex gap-6 border-2 border-dashed border-yellow-500 p-[12px_15px] text-[12px]",
            iconClass: "text-red-500 text-lg",
            label: "ERROR",
          },
          {
            title: "Uyarı Kullanımı",
            code: `<Alert type="warning">Uyarı</Alert>`,
            alertClass:
              "flex gap-6 border-2 border-dashed border-yellow-500 p-[12px_15px] text-[12px]",
            iconClass: "text-yellow-500 text-lg",
            label: "WARNING",
          },
          {
            title: "Bilgilendirme Kullanımı",
            code: `<Alert type="information">Bilgi</Alert>`,
            alertClass:
              "flex gap-6 border-2 border-dashed border-yellow-500 p-[12px_15px] text-[12px]",
            iconClass: "text-blue-500 text-lg",
            label: "INFORMATION",
          },
          {
            title: "Yükseklik Sınırlama İle Kullanımı",
            code: `<Alert type="warning">WARNING</Alert>`,
            alertClass:
              "flex gap-6 border-2 border-dashed border-yellow-500 p-[12px_15px] text-[12px]",
            iconClass: "text-blue-500 text-lg",
            label: `${"UYARI UYARI UYARI UYARI UYARI UYARI UYARI UYARI".repeat(
              50
            )}`,
            heightLimit: "true",
          },
        ].map(
          (
            { title, code, alertClass, label, iconClass, heightLimit },
            index
          ) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="mb-3 font-semibold text-gray-700">{title}</p>
              <CopyBlock
                text={code}
                language="jsx"
                showLineNumbers
                theme={dracula}
                wrapLines
              />
              <div
                className={`${alertClass} mt-5 flex items-center ${
                  heightLimit && "max-h-[100px] overflow-auto"
                }`}
              >
                {<BsInfoCircleFill className={iconClass} />}
                {label}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AlertPage;
