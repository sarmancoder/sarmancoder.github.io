import { ContactCTA } from "@/components/ContactCTA";
import DialogContactForm from "@/components/DialogContactForm";
import { MyOtherHero } from "@/components/MyOtherHero";
import NavBar from "@/components/Navbar";
import MarqueeSection from "@/components/shadcn-space/marquee/MarqueeSection";
import { VSection } from "@/components/VSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyOtherHero>
        <DialogContactForm />
      </MyOtherHero>
      {/* <MyHero /> */}
      <VSection heading="Tecnologías con las que he trabajado">
        <MarqueeSection />
      </VSection>
      <ContactCTA>
        <DialogContactForm />
      </ContactCTA>
    </>
  );
}
