import "./styles/ByChrone.scss";
import Button from "../reusableComponents/Button";
import ByChroneImg from "../assets/by-chrone.png";

export default function ByChrone() {
  return (
    <section className="by-chrone">
      <div className="by-chrone__img-wrapper">
        <img src={ByChroneImg} alt="Dms__Image" className="by-chrone__img" />
        <span className="img__overlay"></span>
      </div>

      <div className="by-chrone__content">
        <h3>Brought to you by Chrone</h3>

        <p>
          Shaping the future of bold brands and giving you the edge to outplay
          the competition.
        </p>
      </div>

      <Button>Book ticket</Button>
    </section>
  );
}
