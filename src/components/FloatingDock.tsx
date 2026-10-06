'use client';

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function MyFloatingDock() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Comprobamos usando resolvedTheme o theme
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Cambiar Tema",
      icon: (
        <div
          className="h-full w-full pointer-events-auto flex items-center justify-center"
          onClickCapture={toggleTheme}
        >
          {/* Muestra Sol en modo oscuro y Luna en modo claro usando clases de CSS */}
          <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300 hidden dark:block" />
          <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300 block dark:hidden" />
        </div>
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center fixed bottom-[20px] z-50 justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}