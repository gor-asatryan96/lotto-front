import React from "react";
import "../../../../App.css";
import leftMoto from "../../../../../assets/images/motoLeft.png";
import rightMoto from "../../../../../assets/images/motoRight.png";
import ellipse from "../../../../../assets/images/Ellipse.png";
// import winLogo from "../../../../../assets/images/win.png";
// import jackpotLogo from "../../../../../assets/images/jackpotLogo.png";
import BallItem from "../../../Items/BallItem";
import { gameTypes } from "../../../../../helpers/Constants";
import ErrorBoundary from "../../../../ErrorBoundary/ErrorBoundary";
import { NAVBAR_NAMES } from "../../../../../constants/names";

const GameBodyHeaderHistory = React.memo((props) => {

  
  return (
    <>
      {props.activeMenu === NAVBAR_NAMES.NOW && (
        <img className="moto leftMoto" src={leftMoto} alt="moto" />
      )}
      {props.activeMenu === NAVBAR_NAMES.NOW && (
        <img className="moto rightMoto" src={rightMoto} alt="moto" />
      )}
      <img className="ellipse" src={ellipse} alt="ellipse" />
      <div className="gameBoardHeader">
        <div className="winJackpotLogos">
          {/* {props.activeGame === CURRENT && (
            <img className="winLogo" src={winLogo} alt="win" />
          )} */}
          {/* {props.activeGame === JACKPOT && (
            <img className="jackpotLogo" src={jackpotLogo} alt="win" />
          )} */}
        </div>
        {/* {props.activeGame === CURRENT && (
          <div className="motoText">{props.languageData[12]}</div>
        )} */}
        {/* {props.activeGame === JACKPOT && <div className='congratulation'>{props.languageData[13]}!</div>} */}
        <ErrorBoundary>
        {props.historyWinnerBalls && !!props.historyWinnerBalls.length && (
          <div className="ballsContainer">
            {props.historyWinnerBalls.map((num, i) => {
              return (
                <BallItem
                  num={num}
                  ballNumberClass="ballNumber"
                  ballImageClass="ball"
                  key={i}
                />
              );
            })}
          </div>
        )}
        </ErrorBoundary>
      </div>
    </>
  );
});

export default GameBodyHeaderHistory;

const { CURRENT } = gameTypes;
