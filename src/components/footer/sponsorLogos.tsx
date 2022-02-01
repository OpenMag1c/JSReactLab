import { FC } from "react";
import { ISponsor } from "@/components/footer/footerSources";

interface SponsorLogosProps {
  sponsors: ISponsor[];
}

const SponsorLogos: FC<SponsorLogosProps> = ({ sponsors }) => (
  <ul className="sponsor-icons">
    {sponsors.map((sponsor) => (
      <a
        key={sponsor.name}
        className={`sponsor-url ${sponsor.name}`}
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="sponsor-img" src={sponsor.logo} alt={sponsor.description} />
      </a>
    ))}
  </ul>
);

export default SponsorLogos;
