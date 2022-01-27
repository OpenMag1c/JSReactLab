import { FC } from "react";
import { ISponsor } from "@/components/footer/footerSources";

interface SponsorLogoProps {
  sponsor: ISponsor;
}

const SponsorLogo: FC<SponsorLogoProps> = ({ sponsor }) => (
  <li>
    <a className={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer">
      <img src={sponsor.logo} alt={sponsor.description} />
    </a>
  </li>
);

export default SponsorLogo;
