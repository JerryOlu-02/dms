import Button from "../reusableComponents/Button";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";
import "./styles/ByChrone.scss";
import ByChroneImg from "../assets/by-chrone.png";

export default function ByChrone() {
  return (
    <section className="by-chrone">
      <aside className="by-chrone__cover">
        {/* <div className="by-chrone__img-wrapper">
          <img src={ByChroneImg} alt="Dms__Image" className="by-chrone__img" />
          <span className="img__overlay"></span>
        </div> */}

        <div className="by-chrone__content">
          <h3>
            Brought to you by <br />
            <span>Chrone Influitive Company</span>
          </h3>

          <p>
            Shaping the future of bold brands and giving you the edge to outplay
            the competition.
          </p>
        </div>

        <Button className="by-chrone__btn">
          Visit Our Website <IconUp />
        </Button>

        <div className="by-chrone__overlay"></div>
      </aside>
    </section>
  );
}
