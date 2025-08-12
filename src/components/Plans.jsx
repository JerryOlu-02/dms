import "swiper/css";
import "./styles/Plans.scss";
import Button from "../reusableComponents/Button";
import { ReactComponent as Checkmark } from "../assets/svg/checkmark.svg";
import { ReactComponent as Seat } from "../assets/svg/seat.svg";
import { ReactComponent as Ticket } from "../assets/svg/ticket.svg";
import { ReactComponent as People } from "../assets/svg/people.svg";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Plans() {
  return (
    <section className="plans">
      <div className="plans__header">
        <h3>One Event. Endless Ways to Join.</h3>
        <p>Unlock Your Path to DMS 2.0</p>
      </div>

      <Swiper
        className="plans__list"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.8,
          },
          990: {
            slidesPerView: 2.1,
          },
          1090: {
            slidesPerView: 2.1,
          },
          1170: {
            slidesPerView: 2.2,
          },
          1390: {
            slidesPerView: 2.8,
          },
          1395: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={24}
      >
        <SwiperSlide className="plan__item">
          <div className="plan__details">
            <div className="plan__alerts">
              <span>
                <Seat />
                Limited seats available
              </span>
            </div>

            <p>The Starter</p>

            <h4>₦10,000</h4>

            <p>
              Attend DMS 2.0 for live tips from Nigeria’s top e-commerce pros to
              scale your business, content, and systems.
            </p>
          </div>

          <Button>Get Ticket</Button>

          <ul className="plan__benefits">
            <li>
              <Checkmark />
               Access to all sessions
            </li>

            <li>
              <Checkmark />
               Access to event merch
            </li>

            <li>
              <Checkmark />
                Access to the networking area
            </li>

            <li>
              <Checkmark />
               Sip & stragize break
            </li>
          </ul>
        </SwiperSlide>

        <SwiperSlide className="plan__item">
          <div className="plan__details">
            <div className="plan__alerts">
              <span className="ticket">
                <Ticket />
                Limited group tickets available
              </span>

              <span className="people">
                <People />
                2 people per group
              </span>
            </div>

            <p>Power Pair Pass</p>

            <h4>₦20,000</h4>

            <p>
              Bring a friend and save, general admission for two to DMS 2.0’s
              full day of insights and connections.
            </p>
          </div>

          <Button>Get Ticket</Button>

          <ul className="plan__benefits">
            <li>
              <Checkmark />
               Access to the networking area
            </li>

            <li>
              <Checkmark />
               Access to event merch
            </li>

            <li>
              <Checkmark />
               Access to all sessions
            </li>

            <li>
              <Checkmark />
               Sip & stragize break
            </li>
          </ul>
        </SwiperSlide>

        <SwiperSlide className="plan__item">
          <div className="plan__details">
            <div className="plan__alerts">
              <span className="ticket">
                <Ticket />
                Limited group tickets available
              </span>

              <span className="people">
                <People />
                2 people per group
              </span>
            </div>

            <p>Squad Pass</p>

            <h4>₦40,000</h4>

            <p>
              This pass is perfect for small teams and co-founder groups or
              friend groups ready to unlock next-level insights at DMS 2.0.
            </p>
          </div>

          <Button>Get Ticket</Button>

          <ul className="plan__benefits">
            <li>
              <Checkmark />
               Access to all sessions
            </li>

            <li>
              <Checkmark />
               Access to event merch
            </li>

            <li>
              <Checkmark />
                Access to the networking area
            </li>

            <li>
              <Checkmark />
               Sip & stragize break
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
