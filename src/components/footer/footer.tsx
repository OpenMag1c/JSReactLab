import { FC } from "react";
import "./footer.scss";
import sponsors from "@/components/footer/footerSources";
import SponsorLogo from "@/components/footer/sponsorLogo";

const Footer: FC = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p className="copyright-text">
        Magic Game Store &copy;{dateNow} All Rights Reserved by
        <a href="/">OpenMXGIC</a>.
      </p>
      <ul className="social-icons">
        {sponsors.map((sponsor) => (
          <SponsorLogo sponsor={sponsor} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
