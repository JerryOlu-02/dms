import "./styles/Quote.scss";
import CeoImg from "../assets/ceo.jpg";

export default function Quote() {
  return (
    <section className="quote">
      <div className="quote__svg">
        <img src={CeoImg} alt="ceo__image" />
      </div>

      <aside className="quote__content">
        <p>Success answers more to consistency rather than intensity.</p>

        <p className="quote__name">- Oluwole Joshua</p>
      </aside>
    </section>
  );
}
