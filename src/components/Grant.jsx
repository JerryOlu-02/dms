import "./styles/Grant.scss";
import Button from "../reusableComponents/Button";
import GrantImg from "../assets/grant-img.jpg";

export default function Grant() {
  return (
    <section className="grant-section">
      <aside className="grant">
        <div className="grant__header">
          <div className="grant__header-content">
            <h3>the ScaleUp Grant?</h3>
            <p>
              The ScaleUp Grant is Chrone’s premier pitch competition
              spotlighting Africa’s most promising e-commerce brands.
              <br />
              <br /> Finalists pitch their vision to a global audience and a
              panel of expert judges, including investors, brand leaders, and
              digital growth strategists.
            </p>
          </div>

          <Button>Apply to Pitch</Button>
        </div>

        <div className="grant__img">
          <img src={GrantImg} alt="Grant__img" />
        </div>
      </aside>

      <aside className="apply__grant">
        <div className="apply__header">Why Apply?</div>

        <div className="apply-items">
          <div className="apply-item__content">
            <p>Go Global</p>
            <p>Pitch your business live to a global audience.</p>
          </div>

          <div className="apply-item__content">
            <p>Win Big</p>
            <p>
              Win equity-free cash prizes and tailored marketing strategy
              sessions.
            </p>
          </div>

          <div className="apply-item__content">
            <p>Get Noticed</p>
            <p>
              Be featured across Chrone’s media network and partner
              publications.
            </p>
          </div>

          <div className="apply-item__content">
            <p>Accelerate Growth</p>
            <p>
              Unlock mentoring, visibility, and growth tools you won’t find
              anywhere else.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
