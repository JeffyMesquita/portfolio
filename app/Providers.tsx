"use client";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "'Metropolis', sans-serif",
          },
          custom: {
            position: "top-center",
          },
        }}
      />
      {children}
    </>
  );
}
