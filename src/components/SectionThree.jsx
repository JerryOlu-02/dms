import { ReactComponent as TvLogo } from "../assets/tv.svg";
import "./styles/SectionThree.scss";
import EventImg from "../assets/expect__img.png";
import { EVENT__DETAILS as eventDetails } from "../utils/textObjects";
import { useEffect, useRef } from "react";
import useSectionContext from "../utils/useSectionContext";

export default function SectionThree() {
  const sectionRef = useRef(null);

  const { activateDetailsRef } = useSectionContext();

  useEffect(() => {
    activateDetailsRef(sectionRef);
  }, []);

  const events = eventDetails.map((event, index) => {
    return (
      <div className="event__container" key={index}>
        <event.svgImage />

        <div className="event__content">
          <p>{event.content}</p>

          <h4>{event.attendees}</h4>
        </div>
      </div>
    );
  });

  return (
    <section ref={sectionRef} className="section-three">
      <div className="section-three__header">
        <h3>What Awaits You at DMS 2.0</h3>
        <p>Get insights, strategies, and connections to grow your brand.</p>
      </div>

      <div className="section-three__content">
        <aside>
          <img src={EventImg} alt="Events__Image" className="events__image" />
        </aside>

        <aside className="events__wrapper">{events}</aside>
      </div>
    </section>
  );
}
