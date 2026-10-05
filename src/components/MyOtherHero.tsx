import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";
import Image from 'next/image';
import {
  RotatingText,
  RotatingTextContainer,
} from '@/components/animate-ui/primitives/texts/rotating';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { BackgroundBeams } from "./ui/background-beams";


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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Hero1Props extends HeroBasicProps { }
type Props = Partial<Hero1Props>;

const defaultProps: Hero1Props = {
  /*badge: {
    text: "Changelog v1.1",
    announcement: "Check out our latest updates",
  },*/
  heading: "Raúl Contreras Morán",
  description: "Construyo productos digitales que hacen crecer tu",
  buttons: {
    primary: {
      text: "Contáctame",
      url: "#contactform",
    },
    /*secondary: {
      text: "View GitHub",
      url: "https://shadcnblocks.com",
    },*/
  },
  image: {
    src: "/assets/heroimage.jpg",
    srcDark: "/assets/heroimage.jpg",
    alt: "Hero image",
  },
};

export function MyOtherHero({ children, ...props }: PropsWithChildren<Props>) {
  const { badge, heading, description, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-16 md:py-0 relative min-h-screen w-full flex flex-col justify-center overflow-hidden", className)}>
      {/* Agregamos relative z-10 para elevación sobre el fondo */}
      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge.text}
                <ArrowUpRight className="size-4" />
              </Badge>
            )}
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>
            <div className="max-w-5xl text-muted-foreground lg:text-xl">
              <span>{description} </span>
              <span className="inline-flex w-[9em] min-w-[140px] text-primary font-bold align-baseline">
                <RotatingTextContainer
                  text={["impacto", "valor", "resultados", "crecimiento"]}
                >
                  <RotatingText />
                </RotatingTextContainer>
              </span>
            </div>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {children}
            </div>
          </div>
          <Image
            src={image.src}
            alt="Hero image"
            width={200}
            height={700}
            className="aspect-video w-full rounded-md border border-border object-cover object-center dark:hidden"
          />
        </div>
      </div>

      {/* El componente de fondo queda detrás del contenido */}
      <BackgroundBeams className="z-0" />
    </section>
  );
}
