import { FC } from "react";
import classes from "./about.module.scss";
import aboutImage from "@/assets/images/about.png";

const About: FC = () => (
  <div className={classes.about}>
    <div className={classes.about__inner}>
      <h1 className={classes.about__title}>About</h1>
      <p>
        Our vast collection of girl games is great for females of all ages. You can play any type of game, from simple
        dress-up to advanced dance competitions. Control cute characters and admirable women. Show off your extreme
        gaming skills, or relax with fashion-based girl games. For a romantic adventure, pick a cute boy, and fall in
        love! Play as ladies of all ages, including mature models and young kids! Create outfits for celebrities, design
        dresses for dolls, or apply cute makeup. Fulfill your wildest shopping dreams without spending a penny.
      </p>
      <p>
        Our games for girls collection features all sorts of licensed dolls and characters. You can play games featuring
        Barbie and Bratz dolls, and even play with replicas of your own toys! Bring your toy chest to life with highly
        authentic, virtual characters. For a classic, girly challenge, try one of our adorable Holly Hobbie or Hello
        Kitty adventures. Try playing with cats and dogs, and take care of your own pet! From Sue to Winx to Nick Dora
        the Explorer, our playful collection will make every girl happy.
      </p>
      <p className={classes.about__thx}>
        This site was created by the great developer Rojkov Maxim. Thank you for visiting us)
        <img className={classes.about__image} src={aboutImage} alt="girl" />
      </p>
    </div>
  </div>
);

export default About;
