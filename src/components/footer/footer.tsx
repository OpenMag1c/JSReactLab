import { FC } from "react";
import "./footer.css";
import sponsors from "@/components/footer/footerSources";

const Footer: FC = () => (
  <footer className="site-footer">
    <p className="copyright-text">
      Magic Game Store &copy;{new Date().getFullYear()} All Rights Reserved by
      <a href="/">OpenMXGIC</a>.
    </p>
    <ul className="social-icons">
      <li>
        <a className="ubisoft" href={sponsors.ubisoft.url}>
          <img src={sponsors.ubisoft.logo} alt={sponsors.ubisoft.logo} width="50" height="50" />
        </a>
      </li>
      <li>
        <a className="eaGames" href={sponsors.eaGames.url}>
          <img src={sponsors.eaGames.logo} alt={sponsors.eaGames.logo} width="50" height="50" />
        </a>
      </li>
      <li>
        <a className="rockStar" href={sponsors.rockStar.url}>
          <img src={sponsors.rockStar.logo} alt={sponsors.rockStar.logo} width="50" height="50" />
        </a>
      </li>
      <li>
        <a className="steam" href={sponsors.steam.url}>
          <img src={sponsors.steam.logo} alt={sponsors.steam.logo} width="50" height="50" />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
