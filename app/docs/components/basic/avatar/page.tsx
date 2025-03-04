"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsInfoCircleFill } from "react-icons/bs";
import Avatar from "../../../../../components/tk-ui/Avatar";

const AvatarPage: React.FC = () => {
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
        Avatar Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Avatar, bir kullanıcının profil fotoğrafı, isminin baş harfleri veya bir
        simge ile temsil edildiği bir bileşendir. Genellikle kullanıcı
        arayüzlerinde (UI) profil resimleri, yorum bölümleri, sohbet
        uygulamaları ve kullanıcı listeleri gibi alanlarda kullanılır.Kullanıcı
        deneyimini artırmak için farklı stiller ve ikon desteğiyle
        özelleştirilebilir.
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
            heading: "Varsayılan Kullanım",
            code: `<Avatar
imgSource="https://cdn.turkishairlines.com/m/46ad4755d29da9d3/original/Turkish-Airlines-Paris-Flights.jpg"
infoContent="Lorem ipsum dolor sit amet"
infoIcon="T"
layout="horizontal"
showShortName
size={50}
subTitle="Lorem ipsum dolor sit amet"
title="Türk Hava Yolları"
/>`,
            title: "Türk Hava Yolları",
            subTitle: "Lorem ipsum dolor sit amet",
            size: 50,
            layout: "horizontal",
            infoIcon: <BsInfoCircleFill />,
            infoContent: "Lorem ipsum dolor sit amet",
            imgSource:
              "https://cdn.turkishairlines.com/m/46ad4755d29da9d3/original/Turkish-Airlines-Paris-Flights.jpg",
            showShortName: true,
            variant: "gray",
            tooltipPagePosition: "top",
          },
        ].map(
          (
            {
              heading,
              title,
              code,
              subTitle,
              size,
              variant,
              layout = "vertical",
              infoContent,
              infoIcon,
              showShortName = false,
              imgSource,
              tooltipPagePosition,
            },
            index
          ) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="mb-3 font-semibold text-gray-700">{heading}</p>
              <CopyBlock
                text={code}
                language="jsx"
                showLineNumbers
                theme={dracula}
                wrapLines
              />
              <Avatar title={title} subTitle={subTitle} size={size} variant={variant}
              layout={layout} infoContent={infoContent} infoIcon={infoIcon} showShortName={showShortName}
              imgSource={imgSource} tooltipPagePosition={tooltipPagePosition}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AvatarPage;
