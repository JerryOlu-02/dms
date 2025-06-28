import Button from "../reusableComponents/Button";
import NavBar from "../reusableComponents/NavBar";
import Sponsors from "../reusableComponents/Sponsors";
import "./styles/Hero.scss";

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* <div className="overlay"></div> */}

        <NavBar />

        <div className="hero__content">
          <p className="hero__sub-heading">A Chrone Event</p>

          <div className="hero__description">
            <h1>
              A Digital <br />
              Marketing <br />
              <span>Summit</span>
            </h1>

            <p>The Playbook for Brands That Want to Dominate the Market</p>
          </div>

          <Button>Book a Seat</Button>
        </div>

        <Sponsors />
      </section>
    </>
  );
}
