import { ReactComponent as TvLogo } from "../assets/tv.svg";
import "swiper/css";
import "./styles/SectionThree.scss";
import { EVENT__DETAILS as eventDetails } from "../utils/textObjects";
import { useEffect, useRef } from "react";
import useSectionContext from "../utils/useSectionContext";

import EventImg from "../assets/expect__img.png";

import AwaitsBanner from "../assets/awaits-banner.jpg";
import AwaitsImg1 from "../assets/what-awaits-1.jpg";
import AwaitsImg2 from "../assets/what-awaits-2.jpg";
import AwaitsImg3 from "../assets/what-awaits-3.jpg";
import AwaitsImg4 from "../assets/what-awaits-4.png";
import AwaitsImg5 from "../assets/what-awaits-5.png";
import AwaitsImg6 from "../assets/what-awaits-6.png";

import { Swiper, SwiperSlide } from "swiper/react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SectionThree() {
  const sectionRef = useRef(null);

  const { activateDetailsRef } = useSectionContext();

  useEffect(() => {
    activateDetailsRef(sectionRef);
  }, []);

  const events = eventDetails.map((event, index) => {
    return (
      <div className="event__container" key={index}>
        <event.svgImage />

        <div className="event__content">
          <p>{event.content}</p>

          <h4>{event.attendees}</h4>
        </div>
      </div>
    );
  });

  return (
    <section ref={sectionRef} className="section-three">
      <div className="section-three__header">
        <h3>What Awaits You at DMS 2.0</h3>
        <p>Get insights, strategies, and connections to grow your brand.</p>
      </div>

      {/* <div className="section-three__content">
        <aside>
          <img src={EventImg} alt="Events__Image" className="events__image" />
        </aside>

        <aside className="events__wrapper">{events}</aside>
      </div> */}

      <aside className="what__awaits">
        <div className="what__awaits__banner">
          <img src={AwaitsBanner} alt="What_Awaits__Banner" />
        </div>

        <div className="what__awaits__details">
          {eventDetails.map((event, index) => (
            <div className="what__awaits-div" key={index}>
              <p>{event.content}</p>

              <h4>{event.attendees}</h4>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

export function WhatAwaits() {
  const awaitsRef = useRef(null);

  useGSAP(() => {
    let sections = gsap.utils.toArray(".what__awaits__img-item");

    gsap
      .to(".what__awaits__img-item", {
        xPercent: -100 * (sections.length - 6),
        repeat: -1,
        duration: 25,
        ease: "linear",
      })
      .totalProgress(0);
  });

  return (
    <aside ref={awaitsRef} className="what__awaits">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          990: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={20}
        className="what__awaits__img"
      >
        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg1} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg2} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg3} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg4} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg5} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg6} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg1} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg2} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg3} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg4} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg5} alt="awaits_image" />
        </SwiperSlide>

        <SwiperSlide className="what__awaits__img-item">
          <img src={AwaitsImg6} alt="awaits_image" />
        </SwiperSlide>
      </Swiper>
    </aside>
  );
}
