import Button from "./Button";
import "./styles/NavBar.scss";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h3 className="logo">D.M.S</h3>

      <div className="btn__container">
        <Button className="btn-nav">
          Book a Sponsor <IconUp />
        </Button>

        <Button className="btn-nav">Book a Seat</Button>
      </div>
    </nav>
  );
}
