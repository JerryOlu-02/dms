import "./styles/Speakers.scss";
import Speaker1Img from "../assets/speakers/speaker-1.png";
import Speaker2Img from "../assets/speakers/speaker-2.png";
import Speaker3Img from "../assets/speakers/speaker-3.png";
import Speaker4Img from "../assets/speakers/speaker-4.png";
import Speaker5Img from "../assets/speakers/speaker-5.png";
import Speaker6Img from "../assets/speakers/speaker-6.png";

export default function Speakers() {
  const speakers = [
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
