import "./styles/Date.scss";
import { ReactComponent as People } from "../assets/svg/people-date.svg";
import { ReactComponent as Star } from "../assets/svg/star.svg";

export default function Date() {
  return (
    <section className="date">
      <div className="date__header">
        <p>The Where and When</p>
        <h3>Circle the Date, Find Your Spot</h3>
      </div>

      <aside className="date__details">
        <div className="date__details__item">
          <People />

          <div className="date__details__item__text">
            <span>Date</span>
            <p>5th September, 2025 </p>
          </div>
        </div>

        <div className="date__details__item">
          <Star />

          <div className="date__details__item__text">
            <span>Location</span>
            <p>
              Admiralty Event Centre,
              <br /> Victoria Island
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
