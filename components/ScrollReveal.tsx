"use client";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { ClientOnly } from "./ClientOnly";

export function ScrollRevealComp() {
  useEffect(() => {
    ScrollReveal({
      delay: 200,
      reset: true,
      duration: 1750,
      useDelay: "always",
      interval: 250,
    });

    ScrollReveal().reveal(".about", {
      origin: "right",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".services-1", {
      origin: "left",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".services-2", {
      origin: "right",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".services-3", {
      origin: "left",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".services-4", {
      origin: "right",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".services-5", {
      origin: "left",
      distance: "100px",
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".tools-1", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal(".tools-2", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: -20,
      },
    });

    ScrollReveal().reveal(".tools-3", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal(".tools-4", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: -20,
      },
    });

    ScrollReveal().reveal(".tools-5", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal(".tools-6", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: -20,
      },
    });

    ScrollReveal().reveal(".tools-7", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: 20,
      },
    });

    ScrollReveal().reveal(".tools-8", {
      origin: "top",
      distance: "250px",
      easing: "ease",
      rotate: {
        x: 20,
        z: -20,
      },
    });

    () => {};
  }, []);

  return <ClientOnly></ClientOnly>;
}
