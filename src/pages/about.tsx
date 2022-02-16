import { FC } from "react";
import classes from "./pages.module.scss";
import Block from "@/components/elements/block/block";

interface AboutProps {
  title: string;
}

const About: FC<AboutProps> = ({ title }) => (
  <div className={`${classes.page} ${classes.about}`}>
    <Block title={title}>
      <div className={classes.about__inner}>
        This site was created by the great developer Rojkov Maxim. Thank you for visiting us)
      </div>
    </Block>
  </div>
);

export default About;
