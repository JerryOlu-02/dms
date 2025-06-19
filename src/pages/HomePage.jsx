import ByChrone from "../components/ByChrone";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Roadmap from "../components/Roadmap";
import SectionThree from "../components/SectionThree";
import Speakers from "../components/Speakers";
import StickySection from "../components/StickySection";
import VideoSection from "../components/VideoSection";
import WhyAttend from "../components/WhyAttend";
import WhySponsor from "../components/WhySponsor";
import "./HomePage.scss";
// import SectionTwo from "../components/SectionTwo";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* <SectionTwo /> */}

      <Quote />

      <SectionThree />

      <VideoSection />

      <Speakers />

      <Roadmap />

      <StickySection />

      <WhySponsor />

      <WhyAttend />

      <ByChrone />

      <Footer />
    </>
  );
}
