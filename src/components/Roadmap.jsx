import "swiper/css";
import "./styles/Roadmap.scss";
import { ROADMAP__DETAILS as roadmapDetails } from "../utils/textObjects";
import RoadmapImage1 from "../assets/roadmap-1.png";
import RoadmapImage2 from "../assets/roadmap-2.jpg";
import RoadmapImage3 from "../assets/roadmap-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// import Button from "../reusableComponents/Button";

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

      <Swiper
        className="roadmap__slider"
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
      >
        <SwiperSlide className="roadmap__slide">
          <div className="roadmap__slide-image">
            <img src={RoadmapImage1} alt="Roadmap__image" />
          </div>

          <div className="roadmap__slide-content">
            <p>Content Tracks</p>

            <p>
              Discover powerful keynotes and breakout sessions across today’s
              most impactful digital marketing themes.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="roadmap__slide">
          <div className="roadmap__slide-image">
            <img src={RoadmapImage2} alt="Roadmap__image" />
          </div>

          <div className="roadmap__slide-content">
            <p>Audience-Based Tracks</p>

            <p>
              Tailored sessions based on your audience type whether you're DTC,
              B2B, marketplace focused, or agency side.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="roadmap__slide">
          <div className="roadmap__slide-image">
            <img src={RoadmapImage3} alt="Roadmap__image" />
          </div>

          <div className="roadmap__slide-content">
            <p>Skill-Based Tracks</p>

            <p>
               Expert led sessions focused on execution and entrepreneurial
              insight across high-impact areas:
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="roadmap-item__wrapper">{roadmapItems}</div> */}

      {/* <Button>Book a Seat</Button> */}
    </section>
  );
}
