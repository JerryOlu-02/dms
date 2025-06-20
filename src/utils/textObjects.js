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

// These imports are used to display speaker images on the "Speakers" section/components on the website
import Speaker1Img from "../assets/speakers/speaker-1.png";
import Speaker2Img from "../assets/speakers/speaker-2.png";
import Speaker3Img from "../assets/speakers/speaker-3.png";
import Speaker4Img from "../assets/speakers/speaker-4.png";
import Speaker5Img from "../assets/speakers/speaker-5.png";
import Speaker6Img from "../assets/speakers/speaker-6.png";

// These imports are used to display information on the "StickySection" section/component on the website
import TrackImg1 from "../assets/tracks/track-1.jpg";
import TrackImg2 from "../assets/tracks/track-2.jpg";
import TrackImg3 from "../assets/tracks/track-3.jpg";
import TrackImg4 from "../assets/tracks/track-4.jpg";
import TrackImg5 from "../assets/tracks/track-5.jpg";
import TrackImg6 from "../assets/tracks/track-6.jpg";
import TrackImg7 from "../assets/tracks/track-7.jpg";

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

// These objects are used to display speaker images on the "Speakers" section/components on the website
export const SPEAKERS = [
  {
    image: Speaker1Img,
    name: "Jacob Murphy",
    position: "Founder, Editorial PHF",
  },
  {
    image: Speaker2Img,
    name: "Susan Udoka",
    position: "CEO, Francise",
  },
  {
    image: Speaker3Img,
    name: "Patricia Adeola",
    position: "Founder, Editorial PHF",
  },
  {
    image: Speaker4Img,
    name: "Alex Crane",
    position: "Shopify Expert",
  },
  {
    image: Speaker5Img,
    name: "Chidinma Okoye",
    position: "Creator",
  },
  {
    image: Speaker6Img,
    name: "Aaron Ayomide",
    position: "Creative Editor, Rikoko",
  },
];

export const EVENT__TRACKS = [
  {
    heading: "Digital Commerce & Conversion",
    desc: `Build online businesses that aren’t just pretty but profitable.`,
    tracks: [
      "From Storefront to Success: Turning Browsers into Buyers",
      "How to Make Your Brand Famous With Email Marketing",
      "Optimizing Post-Purchase Journeys & Customer Experience",
      "What No One Tells You About Scaling DTC in 2025",
    ],
    image: TrackImg1,
  },
  {
    heading: "The Creative Systems",
    desc: "Storytelling, but with structure.",
    tracks: [
      "7-Figure Scaling Playbook for Bootstrapped Brands",
      "What Investors Want: Pitching Beyond the Numbers",
      "Playing Big in a “Saturated” Market",
      "Niche Specialization: How to Find, Own, and Scale Your Unique Market",
    ],
    image: TrackImg2,
  },
  {
    heading: "Scaling, Markets & Capital",
    desc: "Playing the long game.",
    tracks: [
      "7-Figure Scaling Playbook for Bootstrapped Brands",
      "What Investors Want: Pitching Beyond the Numbers",
      "Playing Big in a “Saturated” Market",
      "Niche Specialization: How to Find, Own, and Scale Your Unique Market",
    ],
    image: TrackImg3,
  },
  {
    heading: "Creator-Led Commerce",
    desc: "Creators are the new retailers. Learn how to influence income.",
    tracks: [
      "Building Brand Collabs That Actually Sell",
      "The Rise of User-Generated Revenue",
      "Micro vs. Macro Influence: Who Really Drives Sales?",
      "Niche Marketing in Creator-Led Commerce",
    ],
    image: TrackImg4,
  },
  {
    heading: "Funnels, Flows & Paid Systems",
    desc: "The traffic isn't the prolem. It's your pipeline.",
    tracks: [
      "Funnel Redesigns That Fixed 6-Figure Leaks",
      "Automating Leads Without Losing Human Touch",
      "Meta, Google, TikTok: Paid Ads That Still Work",
    ],
    image: TrackImg5,
  },
  {
    heading: "Data & Marketing Ops",
    desc: "Scale with smart tools, not just smart people.",
    tracks: [
      "Data-Driven Decisions Without Drowning in Metrics",
      "Building Products that People Actually Want to Buy",
    ],
    image: TrackImg6,
  },
  {
    heading: "Social-First Brand Building",
    desc: "Build brands that move culture, not just product.",
    tracks: [
      `The Social-First Framework: Turning Scrolls into Sales`,
      `Going Viral vs. Going Valuable: The Right Bet in 2025`,
      `Email + Social Synergy: How to Integrate Social Media and Email Marketing for Maximum Impact`,
    ],
    image: TrackImg7,
  },
];
