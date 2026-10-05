import { cn } from "cn";
import { PropsWithChildren } from "react";

interface VSectionProps {
  heading: string;
}

export function VSection({ heading, children }: PropsWithChildren<VSectionProps>) {
  return (
    <section className={cn("overflow-hidden md:h-screen")}>
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-20 justify-center h-full">
          <div className="relative isolate flex flex-col gap-5">
            <h1 className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
              {heading}
            </h1>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
