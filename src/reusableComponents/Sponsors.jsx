import "./styles/Sponsors.scss";
import { ReactComponent as ChroneLogo } from "../assets/chrone.svg";
// import { ReactComponent as CocacolaLogo } from "../assets/cocacola.svg";
// import { ReactComponent as CowryWiseLogo } from "../assets/cowrywise.svg";
// import { ReactComponent as FaceBookLogo } from "../assets/facebook.svg";
// import { ReactComponent as SamsungLogo } from "../assets/samsung.svg";

export default function Sponsors() {
  const logos = [ChroneLogo, ChroneLogo, ChroneLogo, ChroneLogo, ChroneLogo];

  const SponsorLogos = logos.map((Logo, index) => {
    return <Logo key={index} />;
  });

  const SponsorLogosTwo = logos.slice().map((Logo, index) => {
    return <Logo key={index} />;
  });

  return (
    <div className="sponsors">
      {/* <AppleLogo />
      <CocacolaLogo />
      <CowryWiseLogo />
      <FaceBookLogo />
      <SamsungLogo /> */}

      <div className="sponsors__container">{SponsorLogos}</div>

      <div className="sponsors__container"> {SponsorLogosTwo}</div>

      <div className="sponsors__container"> {SponsorLogosTwo}</div>
    </div>
  );
}
