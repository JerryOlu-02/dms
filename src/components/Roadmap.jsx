import "./styles/Roadmap.scss";
import { ROADMAP__DETAILS as roadmapDetails } from "../utils/textObjects";
import Button from "../reusableComponents/Button";

export default function Roadmap() {
  const roadmapItems = roadmapDetails.map((item, index) => {
    return (
      <div key={index} className="roadmap-item">
        <div className="roadmap-image">{<item.image />}</div>

        <div className="roadmap-number">{index + 1}</div>

        <div className="roadmap-item__content">
          <h4>{item.program}</h4>

          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="roadmap">
      <div className="roadmap-header">
        <h3>The Roadmap for the Day</h3>

        <p>A day of learning, action, and connection.</p>
      </div>

      <div className="roadmap-item__wrapper">{roadmapItems}</div>

      <Button>Book a Seat</Button>
    </section>
  );
}
