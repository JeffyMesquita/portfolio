import Image from "next/image";
import { ImageResponse } from "next/server";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

// interface Props {
//   params: {
//     slug: string;
//   }
// }

// Caso você queira que a imagem seja dinâmica, você pode usar o código abaixo:

export default async function og() {
  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <Image src="/jeferson.png" alt="Jeferson Mesquita" />
        <div tw="absolute flex bg-black opacity-50 inset-0" />
        <div tw="absolute flex items-center top-2 w-full">
          <p tw="text-white text-4xl flex font-bold m-5">Jeferson Mesquita</p>
          <p tw="text-indigo-200 text-xl flex font-bold m-5">Meu Portfólio</p>
        </div>
      </div>
    ),
    size
  );
}
