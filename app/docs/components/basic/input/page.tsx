"use client";

import React, { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { BsInfoCircleFill } from "react-icons/bs";
import { generateUUID } from "../../../../../utils/uuidGenerator";
import { Tooltip } from "../../../../../components/tk-ui/Tooltip";
import Input from "../../../../../components/tk-ui/Input";

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
        Input Bileşeni
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        Input bileşeni, kullanıcılardan veri almak için kullanılan bir form
        elemanıdır. Kullanıcıdan metin, sayı, e-posta, parola gibi farklı
        türlerde giriş almayı sağlar. Kullanıcı deneyimini artırmak için farklı
        stiller ve ikon desteğiyle özelleştirilebilir.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kullanım</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <CopyBlock
          text={`<Input.Field placeholder="Email"`}
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
            code: `<Input.Field placeholder="Email" />`,
            element: <Input.Field placeholder="Email" />,
          },
          {
            title: "FloatLabel ile Kullanım",
            code: `<Input.Group>      
<Input.FloatLabel htmlFor="email">Email</Input.FloatLabel>      
<Input.Field id="email" placeholder="johndoe@example.com" />    
</Input.Group>`,
            element: (
              <Input.Group>
                {" "}
                <Input.FloatLabel htmlFor="email">Email</Input.FloatLabel>
                <Input.Field id="email" placeholder="johndoe@example.com" />
              </Input.Group>
            ),
          },
          {
            title: "Label ile Kullanım",
            code: `<Input.Group>      
<Input.Label htmlFor="email">Email</Input.Label>      
<Input.Field id="email" placeholder="johndoe@example.com" />    
</Input.Group>`,
            element: (
              <Input.Group>
                {" "}
                <Input.Label htmlFor="email">Email</Input.Label>
                <Input.Field id="email" placeholder="johndoe@example.com" />
              </Input.Group>
            ),
          },
          {
            title: "Hata durumu ile varsayılan kullanım",
            code: `<Input.Group>      
<Input.Field placeholder="Email" />      
<Input.Error>This field required</Input.Error>    
</Input.Group>`,
            element: (
              <Input.Group>
                {" "}
                <Input.Field placeholder="Email" />{" "}
                <Input.Error>This field required</Input.Error>{" "}
              </Input.Group>
            ),
          },
          {
            title: "Hata durumu ile FloatLabel kullanım",
            code: `<Input.Group>      
<Input.FloatLabel>Email</Input.FloatLabel>      
<Input.Field placeholder="Email" />      
<Input.Error>This field required</Input.Error>    
</Input.Group>`,
            element: (
              <Input.Group>
                {" "}
                <Input.FloatLabel>Email</Input.FloatLabel>{" "}
                <Input.Field placeholder="Email" />{" "}
                <Input.Error>This field required</Input.Error>{" "}
              </Input.Group>
            ),
          },
          {
            title: "Maskelenmiş formatta kullanımı",
            code: `<Input.MaskField format="####-####-####-####" placeholder="Card Number" />`,
            element: (
              <Input.MaskField
                format="####-####-####-####"
                placeholder="Card Number"
              />
            ),
          },
        ].map(({ title, code, element }, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
            <p className="mb-3 font-semibold text-gray-700">{title}</p>
            <CopyBlock
              text={code}
              language="jsx"
              showLineNumbers
              theme={dracula}
              wrapLines
            />

            <div className="mt-5">{element}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarPage;
