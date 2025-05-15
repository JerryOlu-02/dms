import "./styles/Roadmap.scss";
import { ReactComponent as RoadmapOneSvg } from "../assets/roadmap-1.svg";
import { ReactComponent as RoadmapTwoSvg } from "../assets/roadmap-2.svg";
import { ReactComponent as RoadmapThreeSvg } from "../assets/roadmap-3.svg";
import { ReactComponent as RoadmapFourSvg } from "../assets/roadmap-4.svg";
import { ReactComponent as RoadmapFiveSvg } from "../assets/roadmap-5.svg";

export default function Roadmap() {
  const roadmapDetails = [
    {
      image: <RoadmapOneSvg />,
      program: "Content Tracks",
      description:
        "Discover powerful keynotes and breakout sessions across today’s most impactful digital marketing themes.",
    },
    {
      image: <RoadmapTwoSvg />,
      program: "Audience-Based Tracks",
      description:
        "Tailored sessions based on your audience type, whether DTC, B2B, marketplace-focused, or agency-side.",
    },
    {
      image: <RoadmapThreeSvg />,
      program: "Skill-Based Tracks",
      description:
        "Expert-led sessions focused on execution and entrepreneurial insight across key areas like content marketing, email marketing, Facebook ads, and product design.",
    },
    {
      image: <RoadmapFourSvg />,
      program: "Format-Based Tracks",
      description:
        "These are tracks categorised by the type of event format (e.g., panel discussions, workshops, networking events, etc.). It helps attendees choose how they want to interact with content.",
    },
    {
      image: <RoadmapFiveSvg />,
      program: "Solution-Focused Tracks",
      description:
        "Tracks that focus on specific products, services, or solutions being presented at the event.",
    },
  ];

  const roadmapItems = roadmapDetails.map((item, index) => {
    return (
      <div key={index} className="roadmap-item">
        <div className="roadmap-image">{item.image}</div>

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
