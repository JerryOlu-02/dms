import "./styles/Speakers.scss";
import { SPEAKERS as speakers } from "../utils/textObjects";
import Button from "../reusableComponents/Button";
import { useEffect, useRef } from "react";
import useSectionContext from "../utils/useSectionContext";

export default function Speakers() {
  const speakersRef = useRef(null);
  const { activateSpeakersRef } = useSectionContext();

  useEffect(() => {
    activateSpeakersRef(speakersRef);
  }, []);

  const speakerItem = speakers.map((item, index) => {
    return (
      <div className="speaker-item" key={index}>
        <img
          src={item.image}
          alt={`${item.name}__image`}
          className="speaker-item__image"
        />

        <div className="speaker-item__desc">
          <h5>{item.name}</h5>

          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <section ref={speakersRef} className="speakers">
      <aside className="speakers-header">
        <h3>Get to Know Our Speakers</h3>

        <p>Real experts. Real experience.</p>
      </aside>

      <aside className="speakers-item__wrapper">{speakerItem}</aside>

      <Button>Book a Seat</Button>
    </section>
  );
}
