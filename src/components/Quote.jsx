import "./styles/Quote.scss";

export default function Quote() {
  return (
    <section className="quote">
      <div className="quote__svg"></div>

      <aside className="quote__content">
        <p>
          We need to stop interrupting what people are interested in and be what
          people are interested in.
        </p>

        <p className="quote__name">- Craig Davis</p>
      </aside>
    </section>
  );
}
