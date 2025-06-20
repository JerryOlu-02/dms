import { EVENT__TRACKS as eventTracks } from "../utils/textObjects";
import Button from "../reusableComponents/Button";
import "./styles/StickySection.scss";

export default function StickySection({}) {
  const renderContent = eventTracks.map((track, index) => (
    <div className="event__track" key={index}>
      <h4>{track.heading}</h4>

      <div className="event__track-content">
        <p>{track.desc}</p>
        <p>Key Sessions:</p>

        <ul>
          {track.tracks.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="event__track-img">
        <img src={track.image} alt="image__track" />
      </div>
    </div>
  ));

  return (
    <section className="sticky-section">
      <aside className="sticky-section__content">
        <div className="sticky-section__text">
          <h3>Explore Our Event Tracks</h3>

          <p>Specialized content. Maximum impact.</p>
        </div>

        <div className="sticky-section__buttons">
          <Button>Book a Seat</Button>
        </div>
      </aside>

      <aside className="sticky-section__info">
        <div className="sticky-section__info-wrapper">{renderContent}</div>
      </aside>
    </section>
  );
}
