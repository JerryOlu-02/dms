import "./styles/Roadmap.scss";
import { ROADMAP__DETAILS as roadmapDetails } from "../utils/textObjects";

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
        <h3>Your Roadmap for the Day</h3>

        <p>
          Stay on track with a curated agenda to help you get the most from your
          DMS 2.0 experience.
        </p>
      </div>

      <div className="roadmap-item__wrapper">{roadmapItems}</div>
    </section>
  );
}
