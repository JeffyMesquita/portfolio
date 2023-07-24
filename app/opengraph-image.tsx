import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Jeferson Mesquita, meu portfólio ";

export const contentType = "image/png";

// Font

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('/og-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Jeferson Mesquita, meu portfólio
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
