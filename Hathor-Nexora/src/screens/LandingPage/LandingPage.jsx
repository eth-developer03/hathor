import React from "react";
import { BecomeAnAgent } from "./sections/BecomeAnAgent";
import { Compare } from "./sections/Compare";
import { Demo } from "./sections/Demo";
import { ExploreSection } from "./sections/ExploreSection";
import { HomeSection } from "./sections/HomeSection";
import { Telegram } from "./sections/Telegram";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <HomeSection />
        <ExploreSection />
        <Compare />
        <Demo />
        <BecomeAnAgent />
        <Telegram />
      </div>
    </div>
  );
};
