import Button from "./Button";
import "./styles/NavBar.scss";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState();

  const handleToggle = () => {
    setIsOpen((open) => (open ? false : true));
  };

  const activeClass = isOpen ? "open" : "";

  return (
    <nav className="navbar">
      <h3 className="logo">D.M.S</h3>

      <ul className="nav__links">
        <li>Details</li>
        <li>About</li>
        <li>Speakers</li>
        <li>Tracks</li>
      </ul>

      <div className="btn__container">
        <Button className="btn-nav">
          Book a sponsor <IconUp />
        </Button>

        <Button className="btn-nav">Book a Seat</Button>
      </div>

      <div
        onClick={() => handleToggle()}
        className={`nav__hamburger ${activeClass}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
