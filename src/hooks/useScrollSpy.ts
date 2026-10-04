"use client";

import { useEffect, useState } from "react";

export function useScrollSpy() {
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);

    // Guardar valor inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return y; // Devuelve el número en px (ej: 0, 150, 420...)
}