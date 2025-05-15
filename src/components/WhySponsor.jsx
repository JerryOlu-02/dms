import Button from "../reusableComponents/Button";
import "./styles/WhySponsor.scss";
import WhySponsorImg from "../assets/why-sponsor.png";

export default function WhySponsor() {
  return (
    <section className="why-sponsor">
      <aside className="why-sponsor__left">
        <div className="why-sponsor__description">
          <div>Why Sponsor DMS 2.0</div>

          <h4>Position Your Brand for Exposure at DMS 2.0</h4>

          <p>
            Reach over 1,500 marketers, founders, and digital pioneers at DMS
            2.0. As a sponsor, your brand will gain front-row visibility among
            key decision-makers.
            <br />
            <br />
            Take advantage of co-branded content, thought leadership
            opportunities, and premium networking to drive impactful business
            outcomes
          </p>
        </div>

        <Button>Become a sponsor</Button>
      </aside>

      <aside className="why-sponsor__right">
        <img
          src={WhySponsorImg}
          alt="why-sponsor__image"
          className="why-sponsor__img"
        />
      </aside>
    </section>
  );
}
