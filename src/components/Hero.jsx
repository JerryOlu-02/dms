import Button from "../reusableComponents/Button";
import NavBar from "../reusableComponents/NavBar";
import Sponsors from "../reusableComponents/Sponsors";
import "./styles/Hero.scss";

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
            <h1>
              Africa’s New <br />
              Growth Engine
            </h1>

            <p>Scaling Content and eCommerce</p>
          </div>

          <Button>Book a Seat</Button>
        </div>

        <Sponsors />
      </section>
    </>
  );
}
