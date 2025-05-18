// This file contains text objects used in the application.

// These imports are used to display svg information on the "WhyAttend" section/components on the website
import { ReactComponent as WhyIcon1 } from "../assets/why-1.svg";
import { ReactComponent as WhyIcon2 } from "../assets/why-2.svg";
import { ReactComponent as WhyIcon3 } from "../assets/why-3.svg";
import { ReactComponent as WhyIcon4 } from "../assets/why-4.svg";
import { ReactComponent as WhyIcon5 } from "../assets/why-5.svg";

// These imports are used to display svg information on the "Roadmap" section/components on the website
import { ReactComponent as RoadmapOneSvg } from "../assets/roadmap-1.svg";
import { ReactComponent as RoadmapTwoSvg } from "../assets/roadmap-2.svg";
import { ReactComponent as RoadmapThreeSvg } from "../assets/roadmap-3.svg";
import { ReactComponent as RoadmapFourSvg } from "../assets/roadmap-4.svg";
import { ReactComponent as RoadmapFiveSvg } from "../assets/roadmap-5.svg";

// These objects are used to display information on the "WhyAttend" section/component on the website
export const WHY__ITEMS = [
  {
    svgImage: WhyIcon1,
    reason: "Learn From Industry Experts",
    desc: "Gain insider knowledge from top e-commerce strategists, marketers, and business builders.",
  },
  {
    svgImage: WhyIcon2,
    reason: "Discover Winning Strategies",
    desc: "Explore proven tactics for scaling your brand through email marketing, paid ads, content, and more.",
  },
  {
    svgImage: WhyIcon3,
    reason: "Hands-On Insights",
    desc: "Get real-world examples, tools, and templates you can apply immediately to your business or career.",
  },
  {
    svgImage: WhyIcon4,
    reason: "Network With Innovators",
    desc: "Connect with forward-thinking founders, creatives, and marketers from across the continent.",
  },
  {
    svgImage: WhyIcon5,
    reason: "Stay Ahead of the Curve",
    desc: "Understand upcoming trends and technologies that will shape the next wave of digital commerce.",
  },
];

// These objects are used to display information on the "Section Three" section/component on the website
export const EVENT__DETAILS = [
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

// These objects are used to display information on the "Roadmap" section/component on the website
export const ROADMAP__DETAILS = [
  {
    image: RoadmapOneSvg,
    program: "Content Tracks",
    description:
      "Discover powerful keynotes and breakout sessions across today’s most impactful digital marketing themes.",
  },
  {
    image: RoadmapTwoSvg,
    program: "Audience-Based Tracks",
    description:
      "Tailored sessions based on your audience type, whether DTC, B2B, marketplace-focused, or agency-side.",
  },
  {
    image: RoadmapThreeSvg,
    program: "Skill-Based Tracks",
    description:
      "Expert-led sessions focused on execution and entrepreneurial insight across key areas like content marketing, email marketing, Facebook ads, and product design.",
  },
  {
    image: RoadmapFourSvg,
    program: "Format-Based Tracks",
    description:
      "These are tracks categorised by the type of event format (e.g., panel discussions, workshops, networking events, etc.). It helps attendees choose how they want to interact with content.",
  },
  {
    image: RoadmapFiveSvg,
    program: "Solution-Focused Tracks",
    description:
      "Tracks that focus on specific products, services, or solutions being presented at the event.",
  },
];
