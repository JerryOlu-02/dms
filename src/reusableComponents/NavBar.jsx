import Button from "./Button";
import "./styles/NavBar.scss";
import { ReactComponent as IconUp } from "../assets/icon-up.svg";
import { useState, useEffect } from "react";
import useSectionContext from "../utils/useSectionContext";

export default function NavBar() {
  //State to manage Navbar Content Visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((open) => (open ? false : true));
  };

  const activeClass = isOpen ? "open" : "";

  // Sticky event listener to handle sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  // Handle Smooth Scroll Into Section
  const handleScrollToSection = function (ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { tracksRef, speakersRef, aboutRef, detailsRef } = useSectionContext();

  return (
    <nav className="navbar">
      <h3 className="logo">D.M.S</h3>

      <div className={`nav__container ${activeClass}`}>
        <ul className={`nav__links ${activeClass}`}>
          <li onClick={() => handleScrollToSection(detailsRef)}>Details</li>
          <li onClick={() => handleScrollToSection(aboutRef)}>About</li>
          <li onClick={() => handleScrollToSection(speakersRef)}>Speakers</li>
          <li onClick={() => handleScrollToSection(tracksRef)}>Tracks</li>
        </ul>

        <div className={`btn__container ${activeClass}`}>
          <Button className="btn-nav">
            Book a sponsor <IconUp />
          </Button>

          <Button className="btn-nav">Book a Seat</Button>
        </div>
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
