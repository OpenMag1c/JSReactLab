import { FC } from "react";
import { ISponsor } from "@/components/footer/footerSources";
import classes from "./footer.module.scss";

interface SponsorLogosProps {
  sponsors: ISponsor[];
}

const SponsorLogos: FC<SponsorLogosProps> = ({ sponsors }) => (
  <ul className={classes.sponsor__icons}>
    {sponsors.map((sponsor) => (
      <a
        key={sponsor.name}
        className={classes.sponsor__link}
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={classes.sponsor__img} src={sponsor.logo} alt={sponsor.description} />
      </a>
    ))}
  </ul>
);

export default SponsorLogos;
