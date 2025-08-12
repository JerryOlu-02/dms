import "./styles/Sponsors.scss";
import { ReactComponent as Shopify } from "../assets/svg/shopify.svg";
import { ReactComponent as Jumia } from "../assets/svg/jumia.svg";
import { ReactComponent as Tetra } from "../assets/svg/tetra.svg";
import { ReactComponent as Nectar } from "../assets/svg/nectar.svg";
import { ReactComponent as SoFresh } from "../assets/svg/so-fresh.svg";
import { ReactComponent as BuyBetter } from "../assets/svg/buy-better.svg";

export default function Sponsors() {
  return (
    <section className="our-sponsors">
      <div className="our-sponsors__header">
        <h3>Our Sponsors</h3>
        <p>Unlock Your Path to DMS 2.0</p>
      </div>

      <div className="our-sponsors__content">
        <aside className="our-sponsors__list">
          <div className="sponsor__div">
            <Shopify />
          </div>
          <div className="sponsor__div">
            <Jumia />
          </div>
          <div className="sponsor__div">
            <BuyBetter />
          </div>

          <div className="sponsor__div">
            <SoFresh />
          </div>
          <div className="sponsor__div">
            <Nectar />
          </div>
          <div className="sponsor__div">
            <Tetra />
          </div>
        </aside>
      </div>
    </section>
  );
}
