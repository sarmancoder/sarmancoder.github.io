import { Marquee } from "@/components/shadcn-space/animations/marquee";

import {Javascript, TypescriptIcon as Typescript, _React, NodejsIcon as Nodejs} from '@dev.icons/react'
import {DockerIcon, SpringIcon, MongodbIcon, Postgresql, MysqlIcon} from '@dev.icons/react'
import {GitIcon, VisualStudioCode, IntellijIdea, EclipseIcon, TailwindIcon} from '@dev.icons/react'
// Nuevos (según tu CV): comprueba los nombres exactos en la librería
import {Java as JavaIcon, NextjsIcon, _Vue as VuejsIcon, LinuxMint as LinuxIcon, Php as PhpIcon, Html5 as Html5Icon, Jira as JiraIcon} from '@dev.icons/react'

import { ReactNode } from "react";

const size = 32

type Brand = {
  icon: ReactNode;
  name: string;
};

// Fila 1: backend, lenguajes y bases de datos
const backendList: Brand[] = [
  { icon: <JavaIcon size={size} />, name: "Java" },
  { icon: <SpringIcon size={size} />, name: "Spring Boot" },
  { icon: <Postgresql size={size} />, name: "PostgreSQL" },
  { icon: <MysqlIcon size={size} />, name: "MySQL" },
  { icon: <MongodbIcon size={size} />, name: "MongoDB" },
  { icon: <PhpIcon size={size} />, name: "PHP" },
  { icon: <Nodejs size={size} />, name: "Node.js" },
  { icon: <DockerIcon size={size} />, name: "Docker" },
  { icon: <LinuxIcon size={size} />, name: "Linux" },
];

// Fila 2: frontend y herramientas
const frontendList: Brand[] = [
  { icon: <_React size={size} />, name: "React" },
  { icon: <NextjsIcon size={size} />, name: "Next.js" },
  { icon: <VuejsIcon size={size} />, name: "Vue.js" },
  { icon: <Typescript size={size} />, name: "TypeScript" },
  { icon: <Javascript size={size} />, name: "JavaScript" },
  { icon: <Html5Icon size={size} />, name: "HTML5" },
  { icon: <TailwindIcon size={size} />, name: "TailwindCSS" },
  { icon: <GitIcon size={size} />, name: "Git" },
  { icon: <JiraIcon size={size} />, name: "Jira" },
  { icon: <IntellijIdea size={size} />, name: "IntelliJ IDEA" },
  { icon: <VisualStudioCode size={size} />, name: "VS Code" },
  { icon: <EclipseIcon size={size} />, name: "Eclipse" },
];

function BrandItem({ brand }: { brand: Brand }) {
  return (
    <div className="flex flex-col items-center px-10">
      {brand.icon}
      <span className="text-lg text-balance text-muted-foreground">
        {brand.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <div className="flex flex-col gap-6">
      <Marquee className="[--duration:25s] p-0" pauseOnHover>
        {backendList.map((brand) => (
          <BrandItem key={brand.name} brand={brand} />
        ))}
      </Marquee>

      <Marquee className="[--duration:25s] p-0" pauseOnHover reverse>
        {frontendList.map((brand) => (
          <BrandItem key={brand.name} brand={brand} />
        ))}
      </Marquee>
    </div>
  );
}