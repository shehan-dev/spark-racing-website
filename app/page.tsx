import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import CursorTrail from "@/components/CursorTrail";
import Hero from "@/components/Hero";
import SponsorMarquee from "@/components/SponsorMarquee";
import Achievements from "@/components/Achievements";
import CTABand from "@/components/CTABand";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import SWS from "@/sections/SWS";
import Audience from "@/sections/Audience";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <Nav />
      <main>
        <Hero />
        <SponsorMarquee />
        <About />
        <Achievements />
        <CTABand
          title="Put your brand on a championship-winning kart"
          text="We're chasing Sri Lanka's first-ever 24-hour endurance win. Race with us."
          cta="Partner With Us"
        />
        <SWS />
        <Audience />
        <Packages />
        <CTABand
          title="Need a custom package?"
          text="Every tier can be tailored — extra activations, product giveaways, lead-gen and more."
          cta="Talk to our team"
        />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
