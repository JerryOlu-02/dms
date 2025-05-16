import ByChrone from "../components/ByChrone";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";
import Speakers from "../components/Speakers";
import WhyAttend from "../components/WhyAttend";
import WhySponsor from "../components/WhySponsor";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Roadmap />
      <WhySponsor />
      <Speakers />
      <WhyAttend />
      <ByChrone />
      <Footer />
    </>
  );
}
