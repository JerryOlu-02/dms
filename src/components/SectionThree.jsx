import { ReactComponent as TvLogo } from "../assets/tv.svg";
import "swiper/css";
import "./styles/SectionThree.scss";
import EventImg from "../assets/expect__img.png";
import { EVENT__DETAILS as eventDetails } from "../utils/textObjects";
import { useEffect, useRef } from "react";
import useSectionContext from "../utils/useSectionContext";
import AwaitsImg1 from "../assets/what-awaits-1.jpg";
import AwaitsImg2 from "../assets/what-awaits-2.jpg";
import AwaitsImg3 from "../assets/what-awaits-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

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
              slidesPerView: 3,
            },
          }}
          spaceBetween={24}
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
        </Swiper>

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2.7,
            },
            640: {
              slidesPerView: 2.8,
            },
            768: {
              slidesPerView: 3.8,
            },
            820: {
              slidesPerView: 3.8,
            },
            990: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={24}
          className="what__awaits__details"
        >
          {eventDetails.map((event, index) => (
            <SwiperSlide className="what__awaits-div" key={index}>
              <p>{event.content}</p>

              <h4>{event.attendees}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
    </section>
  );
}
