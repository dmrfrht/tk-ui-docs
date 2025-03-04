"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsInfoCircleFill } from "react-icons/bs";
import Alert from "../../../../../components/tk-ui/Alert";

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
            type: "error",
            children: "ERROR",
          },
          {
            title: "Uyarı Kullanımı",
            code: `<Alert type="warning">Uyarı</Alert>`,
            type: "warning",
            children: "WARNING",
          },
          {
            title: "Bilgilendirme Kullanımı",
            code: `<Alert type="information">Bilgi</Alert>`,
            type: "information",
            children: "INFORMATION",
          },
          {
            title: "Yükseklik Sınırlama İle Kullanımı",
            code: `<Alert type="warning" heightLimit>WARNING</Alert>`,
            children: `${"UYARI UYARI UYARI UYARI UYARI UYARI UYARI UYARI".repeat(
              50
            )}`,
            heightLimit: true,
          },
        ].map(({ title, code, children, heightLimit, type }, index) => (
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
              <Alert heightLimit={heightLimit} type={type}>
                {children}
              </Alert>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertPage;
