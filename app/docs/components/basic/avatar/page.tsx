"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsInfoCircleFill } from "react-icons/bs";
import { generateUUID } from "../../../../../utils/uuidGenerator";
import { Tooltip } from "../../../../../components/tk-ui/Tooltip";

const AvatarPage: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const variantClassnames = {
    primary: "bg-red-500 text-white",
    black: "bg-black text-white",
    gray: "bg-gray-500",
  };

  const sizeStyle = (size: number) => {
    return { width: `${size}px`, height: `${size}px` };
  };

  const getShortNameFromTitle = (title) => {
    const splitTitle = title.split(" ");
    const firstLetter = splitTitle[0].charAt(0);
    const lastLetter = splitTitle[splitTitle.length - 1].charAt(0);
    let fullLetter: string;

    if (splitTitle.length > 1) {
      fullLetter = firstLetter + lastLetter;
    } else {
      fullLetter = firstLetter;
    }

    return fullLetter;
  };

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
            avatarId: "1",
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
              avatarId = generateUUID(),
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
              <div
                className={`mt-4 flex inline-flex justify-center items-center ${
                  layout === "vertical" ? "flex-col" : "flex-row"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center rounded-full overflow-hidden relative ${variantClassnames[variant]}`}
                  style={sizeStyle(size)}
                >
                  {imgSource && (
                    <img
                      src={imgSource}
                      alt="avatar"
                      className={`w-full h-full object-cover`}
                    />
                  )}
                  {showShortName && (
                    <span className="absolute">
                      {getShortNameFromTitle(title)}
                    </span>
                  )}
                </div>
                <div
                  className={`${
                    layout === "vertical"
                      ? "mt-[6px] items-center"
                      : "ml-1 items-center"
                  } flex flex-col`}
                >
                  <div className="inline-flex items-center font-bold text-[14px] leading-6">
                    <span className="ml-1 cursor-pointer">{title}</span>
                    {infoIcon && (
                      <span
                        data-tooltip={`${avatarId}-avatar`}
                        className="ml-1"
                      >
                        {infoIcon}
                      </span>
                    )}
                    {infoContent && (
                      <Tooltip
                        id={`${avatarId}-avatar`}
                        content={infoContent}
                        position={tooltipPagePosition}
                      />
                    )}
                  </div>
                  <div className="text-[12px]">{subTitle}</div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AvatarPage;
