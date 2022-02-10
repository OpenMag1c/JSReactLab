import { FC } from "react";
import classes from "./footer.module.scss";
import sponsors from "@/components/footer/footerSources";
import SponsorLogos from "@/components/footer/sponsorLogos";

const Footer: FC = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer className={classes.site__footer}>
      <p className={classes.copyright__text}>
        Magic Game Store &copy;{dateNow} All Rights Reserved by
        <a className={classes.footer__title} href="/">
          OpenMXGIC
        </a>
        .
      </p>
      <SponsorLogos sponsors={sponsors} />
    </footer>
  );
};

export default Footer;
