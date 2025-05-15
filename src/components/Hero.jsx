import Button from "../reusableComponents/Button";
import NavBar from "../reusableComponents/NavBar";
import Sponsors from "../reusableComponents/Sponsors";
import "./styles/Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <NavBar />

      <div className="hero__content">
        <div className="hero__description">
          <h1>
            The Future of <br /> <span>eCommerce</span>
          </h1>

          <p>
            Empowering brands to grow, expanding market reach, and driving
            innovation to shape a better future.
          </p>
        </div>

        <Button>Book a ticket</Button>
      </div>

      <Sponsors />
    </section>
  );
}
