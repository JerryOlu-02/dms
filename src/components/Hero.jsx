import Button from "../reusableComponents/Button";
import LinkComp from "../reusableComponents/Link";
import NavBar from "../reusableComponents/NavBar";
import Popup from "../reusableComponents/Popup";
import Sponsors from "../reusableComponents/Sponsors";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";

import "./styles/Hero.scss";
import CountdownTimer from "../reusableComponents/Countdown";

export default function Hero({ children }) {
  return (
    <>
      <section className="hero">
        {/* <div className="overlay"></div> */}

        <NavBar />

        <div className="hero__content">
          <p className="hero__sub-heading">
            Event By Chrone Influitive Company
          </p>

          <div className="hero__description">
            <h1>Africa’s New Growth Engine</h1>

            <p>Scaling Content and eCommerce</p>
          </div>

          <div className="hero__btns">
            <Button
              link
              url={`https://mainstack.store/chronecompany/dmschrone2025/checkout`}
            >
              Book A Seat
            </Button>

            <Button className="sponsor">Become A Sponsor</Button>
          </div>

          {/* <Popup>
            Book A Seat <IconUp />
          </Popup> */}
        </div>

        {/* <Sponsors /> */}

        <CountdownTimer />
      </section>
    </>
  );
}
