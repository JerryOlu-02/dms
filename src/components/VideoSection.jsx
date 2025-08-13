import { useEffect, useRef } from "react";
import "./styles/VideoSection.scss";
import useSectionContext from "../utils/useSectionContext";
import { WhatAwaits } from "./SectionThree";

export default function VideoSection() {
  const sectionRef = useRef(null);
  const { activateAboutRef } = useSectionContext();

  useEffect(() => {
    activateAboutRef(sectionRef);
  }, []);

  return (
    <section ref={sectionRef} className="video-section">
      <div className="video-section__header">
        <p>Shaping what’s next in digital marketing.</p>
        <h3>DMS 2.0: Where the Future of Marketing Begins</h3>
      </div>

      <WhatAwaits />
    </section>
  );
}
