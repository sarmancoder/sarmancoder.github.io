'use client'
import { ArrowRight, Sparkles } from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface CtaSideImageProps {
  heading: string;
  description: string;
  image: Image;
  buttons?: Buttons;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Cta11Props extends CtaSideImageProps {}
type Props = Partial<Cta11Props>

const defaultProps: Omit<Cta11Props, 'action'> = {
  heading: "Impulsa tu próximo proyecto",
  description: "Descubre herramientas y recursos diseñados para optimizar tu desarrollo y crear aplicaciones increíbles.",
  image: {
    src: "/assets/ctaimage.jpg",
    alt: "Call to Action",
  },
  buttons: {
    primary: {
      text: "Contáctame",
      url: "https://shadcnblocks.com",
    },
    /*secondary: {
      text: "Schedule a Demo",
      url: "https://shadcnblocks.com",
    },*/
  }
};

export function ContactCTA({children, ...props}: PropsWithChildren<Props>) {
  const { heading, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-md border py-0 md:flex-row md:items-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={350}
            className="aspect-video object-cover md:aspect-auto md:max-w-md md:self-stretch" />
          <div className="p-6 md:max-w-120 md:py-8">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-3xl font-semibold">{heading}</h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
