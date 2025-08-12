import ByChrone from "../components/ByChrone";
import Date from "../components/Date";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Quote from "../components/Quote";
import Roadmap from "../components/Roadmap";
import SectionThree from "../components/SectionThree";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import StickySection from "../components/StickySection";
import VideoSection from "../components/VideoSection";
import WhyAttend from "../components/WhyAttend";
import WhySponsor from "../components/WhySponsor";
import NavBar from "../reusableComponents/NavBar";
import "./HomePage.scss";
// import SectionTwo from "../components/SectionTwo";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* <SectionTwo /> */}

      <Quote />

      <VideoSection />

      <Date />

      <SectionThree />

      <Speakers />

      <Roadmap />

      <Sponsors />

      <StickySection />

      <WhyAttend />

      <Plans />

      <WhySponsor />

      <ByChrone />

      <Footer />
    </>
  );
}
