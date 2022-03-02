// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import { productImages } from "@/constants/images";
import IProduct from "@/types/IProduct";
import categories from "./categories";
import { Age, Genres } from "@/constants/filters";

const products: IProduct[] = [
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Horizon Zero Dawn",
    rating: 9,
    categoryId: categories.playstation.id,
    description:
      "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces. A skill tree provides the player with new abilities and bonuses. The player can explore the open world to discover locations and take on side quests. It was released for the PlayStation 4 in 2017 and Microsoft Windows in 2020.",
    price: 19.99,
    img: productImages.Horizon,
    date: new Date(2015, 6, 15),
    age: Age.Eighteen,
    genre: Genres.RPG,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Counter Strike GO",
    rating: 7,
    categoryId: categories.pc.id,
    description:
      "The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured. There are nine official game modes, all of which have distinct characteristics specific to that mode. The game also has matchmaking support that allows players to play on dedicated Valve servers, in addition to community-hosted servers with custom maps and game modes.",
    price: 4.99,
    img: productImages.CounterStrike,
    date: new Date(2018, 8, 21),
    age: Age.Eighteen,
    genre: Genres.Shooter,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Brawl Stars",
    rating: 10,
    categoryId: categories.playstation.id,
    description:
      "Brawl Stars is a multiplayer online battle arena and third-person hero shooter video game developed and published by the Finnish video game company Supercell. It was released worldwide on December 12, 2018 on iOS and Android. The game features various game modes, each with a different objective.",
    price: 0,
    img: productImages.BrawlStars,
    date: new Date(2018, 12, 12),
    age: Age.Sixth,
    genre: Genres.Arcade,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Half-Life VR",
    rating: 8,
    categoryId: categories.pc.id,
    description:
      "Half-Life: Alyx is a virtual reality first-person shooter game developed and published by Valve. It was released in 2020 for Windows and Linux with support for most PC-compatible VR headsets. Set between the events of Half-Life (1998) and Half-Life 2 (2004), players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine. Like previous Half-Life games, Alyx incorporates combat, puzzles, exploration and survival horror.",
    price: 27.99,
    img: productImages.HalfLifeVr,
    date: new Date(2020, 3, 23),
    age: Age.Eighteen,
    genre: Genres.Shooter,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "TES V Skyrim",
    rating: 9,
    categoryId: categories.pc.id,
    description:
      "The game is set 200 years after the events of Oblivion, and takes place in Skyrim, the northernmost province of Tamriel. Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
    price: 24.99,
    img: productImages.Skyrim,
    date: new Date(2011, 11, 11),
    age: Age.Eighteen,
    genre: Genres.RPG,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Clash Royale",
    rating: 9,
    categoryId: categories.xbox.id,
    description:
      'Clash Royale is a tower rush video game which pits players in games featuring two or four players (1v1 or 2v2) in which the objective is to destroy the most opposing towers, with the destruction of the "King\'s Tower" being an instantaneous win.',
    price: 0,
    img: productImages.ClashRoyale,
    date: new Date(2016, 6, 3),
    age: Age.Three,
    genre: Genres.Arcade,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Beat Saber",
    rating: 4,
    categoryId: categories.playstation.id,
    description:
      "Beat Saber is a fast-paced VR experience combining breathtaking neon visuals, energizing music, hand-crafted levels and fine-tuned action gameplay to get you in the flow. With one saber in each hand slash the beats as they fly towards you, matching their direction and color to rack up points and keep the music moving!",
    price: 29.99,
    img: productImages.BeatSaber,
    date: new Date(2019, 5, 21),
    age: Age.Twelve,
    genre: Genres.Arcade,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Terraria",
    rating: 9,
    categoryId: categories.pc.id,
    description:
      "Terraria is a 2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, survival, and mining, playable in both single-player and multiplayer modes. The game has a 2D sprite tile-based graphical style reminiscent of the 16-bit sprites found on the Super NES.",
    price: 2.49,
    img: productImages.Terraria,
    date: new Date(2011, 6, 5),
    age: Age.Three,
    genre: Genres.RPG,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Genshin Impact",
    rating: 10,
    categoryId: categories.pc.id,
    description:
      "Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks.",
    price: 11.99,
    img: productImages.GenshinImpact,
    date: new Date(2020, 8, 28),
    age: Age.AllAges,
    genre: Genres.Arcade,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Contra city",
    rating: 9,
    categoryId: categories.playstation.id,
    description:
      "Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to prevent it (bomb defusal, hostage rescue, escort mission). The series began on Windows in 1999 with the release of the first game, Counter-Strike.",
    price: 1.99,
    img: productImages.ContraCity,
    date: new Date(2010, 10, 25),
    age: Age.Twelve,
    genre: Genres.Shooter,
  },
  {
    id: mockServerHelper.getUniqueIdInt(),
    name: "Snake",
    rating: 6,
    categoryId: categories.xbox.id,
    description:
      "Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself. The concept originated in the 1976 two-player arcade game Blockade from Gremlin Industries, and the ease of implementation has led to hundreds of versions (some of which have the word snake or worm in the title) for many platforms. 1982's Tron arcade game, based on the film, includes snake gameplay for the single-player Light Cycles segment. After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in snake games as it found a larger audience. There are several hundred snake games for iOS alone. ",
    price: 0.99,
    img: productImages.Snake,
    date: new Date(1997, 15, 1),
    age: Age.AllAges,
    genre: Genres.Arcade,
  },
];

export default products;
