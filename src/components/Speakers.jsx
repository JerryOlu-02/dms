import "./styles/Speakers.scss";
import { SPEAKERS as speakers } from "../utils/textObjects";
import Button from "../reusableComponents/Button";

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

        <p>Real experts. Real experience.</p>
      </aside>

      <aside className="speakers-item__wrapper">{speakerItem}</aside>

      <Button>Book a Seat</Button>
    </section>
  );
}
