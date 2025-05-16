import { WHY__ITEMS as whyItems } from "../utils/textObjects";
import "./styles/WhyAttend.scss";

export default function WhyAttend() {
  const whyItem1 = whyItems.map((item, index) => {
    // This is a solution to limit the number of WHYItems displayed to 3.
    if (index > 2) {
      return;
    }
    return (
      <div className="why-item" key={index}>
        <item.svgImage />

        <div className="why-item__content">
          <p>{item.reason}</p>
          <p>{item.desc}</p>
        </div>
      </div>
    );
  });

  const whyItem2 = whyItems.map((item, index) => {
    // This is a solution to limit the number of WHYItems displayed to 3.
    if (index <= 2) {
      return;
    }
    return (
      <div className="why-item" key={index}>
        <item.svgImage />

        <div className="why-item__content">
          <p>{item.reason}</p>
          <p>{item.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="why-attend">
      <aside className="why-item__header">
        <h3>Why You Should Attend</h3>

        <p>
          Unlock a world of inspiration, strategies, and opportunities to
          elevate your e-commerce journey.
        </p>
      </aside>

      <aside className="why-item__wrapper">
        <div className="why-item__wrapper-top">{whyItem1}</div>

        <div className="why-item__wrapper-bottom">{whyItem2}</div>
      </aside>
    </section>
  );
}
