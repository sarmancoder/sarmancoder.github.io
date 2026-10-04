import { ContactForm } from "@/components/ContactForm";
import { MyFooter } from "@/components/MyFooter";
import MyHero from "@/components/MyHero";
import NavBar from "@/components/Navbar";
import MarqueeSection from "@/components/shadcn-space/marquee/MarqueeSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <MyHero />
      <MarqueeSection />
      <MyFooter>
        <ContactForm />
      </MyFooter>
    </>
  );
}
