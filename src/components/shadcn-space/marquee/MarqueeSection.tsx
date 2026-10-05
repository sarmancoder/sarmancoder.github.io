import { Marquee } from "@/components/shadcn-space/animations/marquee";

import {Javascript, TypescriptIcon as Typescript, _React, NodejsIcon as Nodejs} from '@dev.icons/react'
import {DockerIcon, SpringIcon, MongodbIcon, Postgresql, MysqlIcon, Flutter} from '@dev.icons/react'
import {GitIcon, VisualStudioCode, IntellijIdea, EclipseIcon, TailwindIcon} from '@dev.icons/react'

import { ReactNode } from "react";

const size = 32

type BrandList = {
  icon: ReactNode;
  name: string;
};

export default function MarqueeSection() {
  const brandList: BrandList[] = [
  {
    icon: <Typescript size={size} />,
    name: "TypeScript",
  },
  {
    icon: <EclipseIcon size={size} />,
    name: "Eclipse",
  },
  {
    icon: <MongodbIcon size={size} />,
    name: "Mongo DB",
  },
  {
    icon: <DockerIcon size={size} />,
    name: "Docker",
  },
  {
    icon: <_React size={size} />,
    name: "React",
  },
  {
    icon: <MysqlIcon size={size} />,
    name: "MySQL",
  },
  {
    icon: <GitIcon size={size} />,
    name: "Git",
  },
  {
    icon: <SpringIcon size={size} />,
    name: "Spring boot",
  },
  {
    icon: <Javascript size={size} />,
    name: "JavaScript",
  },
  {
    icon: <TailwindIcon size={size} />,
    name: "TailwindCSS",
  },
  {
    icon: <Nodejs size={size} />,
    name: "Node.js",
  },
  {
    icon: <IntellijIdea size={size} />,
    name: "Intellij IDEA",
  },
  {
    icon: <Postgresql size={size} />,
    name: "Postgre SQL",
  },
  {
    icon: <Flutter size={size} />,
    name: "Flutter",
  },
  {
    icon: <VisualStudioCode size={size} />,
    name: "Visual studio code",
  },
];

  return (
    <>
      <Marquee className="[--duration:20s] p-0" pauseOnHover>
        {brandList.map((brand, index) => (
          <div key={index} className="flex flex-col items-center px-10">
            {brand.icon}
            <span className="text-lg text-balance text-muted-foreground">{brand.name}</span>
          </div>
        ))}
      </Marquee>
    </>
  );
}
