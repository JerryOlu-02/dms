import { ReactComponent as TvLogo } from "../assets/tv.svg";
import "./styles/SectionThree.scss";
import EventImg from "../assets/expect__img.png";

export default function SectionThree() {
  const eventDetails = [
    {
      content: "Registered Attendees",
      attendees: 4000,
    },
    {
      content: "Sponsors and Partners",
      attendees: "50+",
    },
    {
      content: "Event Tracks",
      attendees: 8,
    },
    {
      content: "Interactive Panel ",
      attendees: 4,
    },
    {
      content: "Class Speakers",
      attendees: 8,
    },
  ];

  const events = eventDetails.map((event, index) => {
    return (
      <div className="event__container" key={index}>
        <TvLogo />
        <p>{event.content}</p>
        <h4>{event.attendees}</h4>
      </div>
    );
  });

  return (
    <section className="section-three">
      <div className="section-three__header">
        <h3>What to Expect</h3>
        <p>
          Discover the key sessions, speakers, and highlights planned for the
          event.
        </p>
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
