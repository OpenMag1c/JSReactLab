import { FC } from "react";
import "./footer.scss";
import sponsors from "@/components/footer/footerSources";

const Footer: FC = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p className="copyright-text">
        Magic Game Store &copy;{dateNow} All Rights Reserved by
        <a href="/">OpenMXGIC</a>.
      </p>
      <ul className="social-icons">
        <li>
          <a className="ubisoft" href={sponsors.ubisoft.url} target="_blank" rel="noopener noreferrer">
            <img src={sponsors.ubisoft.logo} alt={sponsors.ubisoft.description} />
          </a>
        </li>
        <li>
          <a className="eaGames" href={sponsors.eaGames.url} target="_blank" rel="noopener noreferrer">
            <img src={sponsors.eaGames.logo} alt={sponsors.eaGames.description} />
          </a>
        </li>
        <li>
          <a className="rockStar" href={sponsors.rockStar.url} target="_blank" rel="noopener noreferrer">
            <img src={sponsors.rockStar.logo} alt={sponsors.rockStar.description} />
          </a>
        </li>
        <li>
          <a className="steam" href={sponsors.steam.url} target="_blank" rel="noopener noreferrer">
            <img src={sponsors.steam.logo} alt={sponsors.steam.description} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
