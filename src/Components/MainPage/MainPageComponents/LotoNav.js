import React from "react";
import "../../App.css";
import { gameTypes } from "../../../helpers/Constants";

const LotoNav = React.memo(({ activeGame, setActiveGame, languageData }) => {
  const toggleCGActive = () => {
    setActiveGame(CURRENT);
  };

  const toggleJGActive = () => {
    setActiveGame(JACKPOT);
  };

  return (
    <div className="lotoNav">
      <div
        onClick={toggleCGActive}
        className={activeGame === CURRENT ? "lotoNavActive" : ""}
      >
        {languageData[0]}
      </div>
      <div
        onClick={toggleJGActive}
        className={activeGame === JACKPOT ? "lotoNavActive" : ""}
      >
        {languageData[1]}
      </div>
    </div>
  );
});

export default LotoNav;

const { CURRENT, JACKPOT } = gameTypes;
