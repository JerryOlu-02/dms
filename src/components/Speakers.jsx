import "./styles/Speakers.scss";
import { SPEAKERS as speakers } from "../utils/textObjects";

export default function Speakers() {
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
    <section className="speakers">
      <aside className="speakers-header">
        <h3>Get to Know Our Speakers</h3>

        <p>
          Get ready for an exciting lineup of speakers who will share their
          stories and knowledge.
        </p>
      </aside>

      <aside className="speakers-item__wrapper">{speakerItem}</aside>
    </section>
  );
}
