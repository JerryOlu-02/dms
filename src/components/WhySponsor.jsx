import Button from "../reusableComponents/Button";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";
import "./styles/WhySponsor.scss";
import WhySponsorImg from "../assets/sponsor.png";

export default function WhySponsor() {
  return (
    <section className="why-sponsor">
      <aside className="why-sponsor__left">
        <div className="why-sponsor__description">
          <div>
            1,500+ marketers, founders, and digital pioneers—one unmatched
            platform.
          </div>

          <h4>Become a Sponsor, Make an Impact</h4>

          <p>
            At DMS, your brand gets front-row visibility in front of
            decision-makers. Leverage co-branded content, thought leadership,
            and premium networking to drive real business outcomes—from lead
            generation to market expansion.
          </p>
        </div>

        <Button>
          Become a sponsor <IconUp />
        </Button>
      </aside>

      <aside className="why-sponsor__right">
        <img
          src={WhySponsorImg}
          alt="why-sponsor__image"
          className="why-sponsor__img"
        />

        <div className="img-overlay"></div>
      </aside>
    </section>
  );
}
