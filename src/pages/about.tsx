import { FC } from "react";
import "./pages.css";
import BlockOfElements from "@/components/elements/blockOfElements/blockOfElements";

interface AboutProps {
  title: string;
}

const About: FC<AboutProps> = ({ title }) => (
  <div className="page about">
    <BlockOfElements title={title}>
      <div className="page about-inner">
        This site was created by the great developer Rojkov Maxim.
        <br /> Thank you for visiting us)
      </div>
    </BlockOfElements>
  </div>
);

export default About;
