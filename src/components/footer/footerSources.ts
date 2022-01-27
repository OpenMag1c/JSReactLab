import cdProjLogo from "images/EAGamesLogo.png";
import steamLogo from "images/SteamLogo.png";
import rockstarLogo from "images/RockStarLogo.png";
import ubiLogo from "images/UbisoftLogo.png";

interface ISponsors {
  [key: string]: {
    url: string;
    logo: string;
    description: string;
  };
}

const sponsors: ISponsors = {
  eaGames: { url: "https://www.ea.com/ru-ru", logo: cdProjLogo, description: "EA Games log" },
  steam: { url: "https://store.steampowered.com/?l=russian", logo: steamLogo, description: "Steam logo" },
  rockStar: { url: "https://www.rockstargames.com/ru/", logo: rockstarLogo, description: "RockStar logo" },
  ubisoft: { url: "https://www.ubisoft.com/ru-ru/", logo: ubiLogo, description: "Ubisoft logo" },
};

export default sponsors;
