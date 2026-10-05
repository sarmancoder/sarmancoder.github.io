import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from 'next/image'
import { cn } from "cn";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
interface Hero1Props extends HeroBasicProps {}
type Props = Partial<Hero1Props>;

const defaultProps: Hero1Props = {
  /*badge: {
    text: "Changelog v1.1",
    announcement: "Check out our latest updates",
  },*/
  heading: "Raúl Contreras Morán",
  description: "Construyo productos digitales que impulsan el crecimiento de tu negocio.",
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

export function MyOtherHero(props: Props) {
  const { badge, heading, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
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
            <p className="max-w-5xl text-balance text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button size="lg" className="w-full sm:w-auto" render={<a href={buttons.primary.url} />} nativeButton={false}>{buttons.primary.text}<ArrowRight className="size-4" /></Button>
              )}
              {buttons?.secondary && (
                <Button variant="outline" size="lg" className="w-full sm:w-auto" render={<a href={buttons.secondary.url} />} nativeButton={false}>{buttons.secondary.text}</Button>
              )}
            </div>
          </div>
          <Image
            src={image.src}
            alt="Hero image"
            width={200}
            height={700}
            className="aspect-video w-full rounded-md border border-border object-cover object-center dark:hidden" />
        </div>
      </div>
    </section>
  );
}
