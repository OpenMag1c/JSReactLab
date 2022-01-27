import cdProjLogo from "images/EAGamesLogo.png";
import steamLogo from "images/SteamLogo.png";
import rockstarLogo from "images/RockStarLogo.png";
import ubiLogo from "images/UbisoftLogo.png";

export interface ISponsor {
  name: string;
  url: string;
  logo: string;
  description: string;
}

const sponsors: ISponsor[] = [
  { name: "ubisoft", url: "https://www.ubisoft.com/ru-ru/", logo: ubiLogo, description: "Ubisoft logo" },
  { name: "eaGames", url: "https://www.ea.com/ru-ru", logo: cdProjLogo, description: "EA Games log" },
  { name: "rockStar", url: "https://www.rockstargames.com/ru/", logo: rockstarLogo, description: "RockStar logo" },
  { name: "steam", url: "https://store.steampowered.com/?l=russian", logo: steamLogo, description: "Steam logo" },
];

export default sponsors;
