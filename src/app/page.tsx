import { ContactForm } from "@/components/ContactForm";
import { MyFooter } from "@/components/MyFooter";
import { MyOtherHero } from "@/components/MyOtherHero";
import NavBar from "@/components/Navbar";
import MarqueeSection from "@/components/shadcn-space/marquee/MarqueeSection";
import { VSection } from "@/components/VSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyOtherHero />
      {/* <MyHero /> */}
      <VSection heading="Tecnologías con las que he trabajado">
        <MarqueeSection />
      </VSection>
      <MyFooter>
        <ContactForm />
      </MyFooter>
    </>
  );
}
