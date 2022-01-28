import { FC } from "react";
import "./footer.scss";
import sponsors from "@/components/footer/footerSources";
import SponsorLogos from "@/components/footer/sponsorLogos";

const Footer: FC = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p className="copyright-text">
        Magic Game Store &copy;{dateNow} All Rights Reserved by
        <a href="/">OpenMXGIC</a>.
      </p>
      <SponsorLogos sponsors={sponsors} />
    </footer>
  );
};

export default Footer;
