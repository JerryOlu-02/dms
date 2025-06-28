import { EVENT__TRACKS as eventTracks } from "../utils/textObjects";
import Button from "../reusableComponents/Button";
import "./styles/StickySection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StickySection() {
  const imgContainer = useRef();

  useGSAP(() => {
    // const details = gsap.utils.toArray(".event__track-content");
    const photos = gsap.utils.toArray(".event__track-img-div");

    photos.forEach(function (item, index) {
      item.style.zIndex = photos.length - index;
    });

    gsap.set(".event__track-img-div", {
      clipPath: function () {
        return "inset(0px 0px  0px 0px)";
      },
      // autoAlpha: 1,
    });

    const animation = gsap.to(".event__track-img-div:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: ".5",
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".sticky-section",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
  });

  const renderContent = eventTracks.map((track, index) => (
    <div key={index} className="event__track-mobile">
      <div ref={imgContainer} className="event__track-img-div-mobile">
        <img src={track.image} alt="image__track" />
      </div>

      <div className="event__track-content-div">
        <p className="desc-text">{track.desc}</p>

        <h4>{track.heading}</h4>

        <p>Key Sessions:</p>

        <ul>
          {track.tracks.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  const renderEventImages = eventTracks.map((track, index) => (
    <div className="event__track-img-div" key={index}>
      <img src={track.image} alt="image__track" />
    </div>
  ));

  const renderEventContent = eventTracks.map((track, index) => (
    <div className="event__track-content-div" key={index}>
      <p className="desc-text">{track.desc}</p>

      <h4>{track.heading}</h4>

      <p>Key Sessions:</p>

      <ul>
        {track.tracks.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <section className="sticky-section">
      <aside className="sticky-section__content">
        <div className="sticky-section__text">
          <h3>Explore Our Event Tracks</h3>

          <p>Specialized content. Maximum impact.</p>
        </div>

        {/* <div className="sticky-section__buttons">
          <Button>Book a Seat</Button>
        </div> */}
      </aside>

      <aside className="sticky-section__info">
        <div className="sticky-section__info-wrapper">
          <div className="event__track">
            <div className="event__track-img">{renderEventImages}</div>
            <div className="event__track-content">{renderEventContent}</div>
          </div>

          {renderContent}
        </div>
      </aside>
    </section>
  );
}
