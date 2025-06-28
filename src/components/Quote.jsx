import "./styles/Quote.scss";
import CeoImg from "../assets/ceo.jpg";

export default function Quote() {
  return (
    <section className="quote">
      <div className="quote__svg">
        <img src={CeoImg} alt="ceo__image" />
      </div>

      <aside className="quote__content">
        <p>
          People don’t buy products, they buy better versions of themselves.
        </p>

        <p className="quote__name">- Oluwole Joshua</p>
      </aside>
    </section>
  );
}
