import React from "react";
import "../../../App.css";
import GamerItem from "../../Items/GamerItem";
import Loader from "../../../Loading/Loader";
import WaitingHistroyBlock from "../WaitingHistoryBlock/WaitingHistroyBlock";
import GameBodyHeaderWaiting from "./GameBodyComponents/GameBodyHeaderWaiting";
import GameBodyHeaderHistory from "./GameBodyComponents/GameBodyHeaderHistory";
import NoGamerItem from "../../Items/NoGamerItem";
import ball from "../../../../assets/images/ball2.png";
import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Navbar/Navbar";

const GameBody = React.memo((props) => {

  return (
    <div className="gameBody">
      <img src={ball} alt="" style={{ position: "absolute", zIndex: "-100" }} />
      <div className="loadingContainer">
        
        <Navbar isMobile activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>

        <WaitingHistroyBlock
          currentDrawItems={props.currentDrawItems}
          activeGameId={props.activeGameId}
          mounts={props.mounts}
          toggleActiveGameId={props.toggleActiveGameId}
          isCurrentAnimationActive={props.isCurrentAnimationActive}
          activeGame={props.activeGame}
          languageData={props.languageData}
          isNoMoreBetsActive={props.isNoMoreBetsActive}
        />
      
      
        {props.isHistoryBlockLoading && <Loader />}
      </div>

      <div className="loadingContainer">
        <div className="gameBoard">
          {props.isWaitingGameActive ? (
            <GameBodyHeaderWaiting
              activeMenu={props.activeMenu}
              activeGame={props.activeGame}
              historyWinnerBalls={props.historyWinnerBalls}
              isCurrentGameStarted={props.isCurrentGameStarted}
              waitingCurrentWinnerBalls={props.waitingCurrentWinnerBalls}
              languageData={props.languageData}
              isNoMoreBetsActive={props.isNoMoreBetsActive}
              activeLanguage={props.activeLanguage}
            />
          ) : (
            <GameBodyHeaderHistory
              activeMenu={props.activeMenu}
              activeGame={props.activeGame}
              languageData={props.languageData}
              historyWinnerBalls={props.historyWinnerBalls}
            />
          )}

          <div className="gamersBoardPopup">
            <div className="gamersBoardHeader">
              <div>{props.languageData.Gamers}</div>
              <div>{props.languageData.Time}</div>
              <div>{props.languageData.Bet}</div>
              <div>{props.languageData.Combination}</div>
              <div>{props.languageData.Win}</div>
            </div>
            <div className="gamerItems">
              <ErrorBoundary>
                {props.gamersItems && !!props.gamersItems.length ? (
                  props.gamersItems.map((item) => {
                    return (
                      <GamerItem
                        winnerBalls={
                          props.isWaitingGameActive
                            ? props.waitingCurrentWinnerBalls
                            : props.historyWinnerBalls
                        }
                        data={item}
                        key={uuidv4()}
                        languageData={props.languageData}
                      />
                    );
                  })
                ) : (
                  <NoGamerItem languageData={props.languageData} />
                )}
              </ErrorBoundary>
            </div>
          </div>
          {/* <div className='gamerBoardBottomOpacity'></div> */}
          <button
            className="seeAllGamers"
            disabled={!!!props.allGamers}
            onClick={() => props.toggleAllGamesPopup(true)}
          >
            <div>
              {!!props.allGamers ? (
                <>
                  <span className="seeAllText">
                    {props.languageData.SeeAll}&nbsp;
                  </span>
                  <span className="gamersCounter">
                    {" "}
                    {props.allGamers.toString() && `( ${props.allGamers} )`}
                  </span>
                </>
              ) : (
                <span>{props.languageData.NoTickets}</span>
              )}
            </div>
          </button>
        </div>
        {props.isGameLoading && <Loader spiner="true" />}
      </div>
    </div>
  );
});

export default GameBody;
