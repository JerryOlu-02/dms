import useSectionContext from "../utils/useSectionContext";
import "./styles/Footer.scss";

export default function Footer() {
  const handleScrollToSection = function (ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { tracksRef, speakersRef, aboutRef, roadmapRef } = useSectionContext();

  return (
    <section className="footer">
      <div className="footer__logo">
        <h5>D.M.S</h5>

        <p>
          At DMS 2.0, we bring together the latest strategies, cutting-edge
          tools, and industry-leading experts to help you succeed in the dynamic
          world of e- commerce. 
        </p>
      </div>

      <div className="footer-links__wrapper">
        <div className="footer__links">
          <h5>Actions</h5>

          <ul>
            <li>Book Ticket</li>
            <li>Beacome a sponsor</li>
            <li>Event tracks</li>
            <li>Speakers</li>
          </ul>
        </div>

        <div className="footer__links">
          <h5>Sections</h5>

          <ul>
            <li onClick={() => handleScrollToSection(aboutRef)}>About</li>
            <li onClick={() => handleScrollToSection(roadmapRef)}>Roadmap</li>
            <li onClick={() => handleScrollToSection(tracksRef)}>
              Event Tracks
            </li>
            <li onClick={() => handleScrollToSection(speakersRef)}>Speakers</li>
          </ul>
        </div>

        <div className="footer__links">
          <h5>Socials</h5>

          <ul>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
