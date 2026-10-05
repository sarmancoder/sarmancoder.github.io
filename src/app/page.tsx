import { ContactForm } from "@/components/ContactForm";
import { MyFooter } from "@/components/MyFooter";
import MyHero from "@/components/MyHero";
import { MyOtherHero } from "@/components/MyOtherHero";
import NavBar from "@/components/Navbar";
import MarqueeSection from "@/components/shadcn-space/marquee/MarqueeSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyOtherHero />
      {/* <MyHero /> */}
      <MarqueeSection />
      <MyFooter>
        <ContactForm />
      </MyFooter>
    </>
  );
}
