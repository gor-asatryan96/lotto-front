import React from "react";
import "../../../App.css";
import WaitingGameItem from "../../Items/WaitingGameItem";
import HistoryGameItem from "../../Items/HistoryGameItem";
import { gameTypes } from "../../../../helpers/Constants";
import ErrorBoundary from "../../../ErrorBoundary/ErrorBoundary";

const WaitingHistroyBlock = React.memo((props) => {

  return (
    <div className="waitingHistoryBlock">
      <div className="waitingBlock">
        <div className="waitingRowHeader">
          <div className="waitingLine" />
          <div className="waitingText">{props.languageData.WaitingGame}</div>
          <div className="waitingLine" />
        </div>
        <ErrorBoundary>
        {props.activeGame === CURRENT && !!props.currentDrawItems && !!props.currentDrawItems[0] && (
          <WaitingGameItem
            data={
              props.currentDrawItems &&
              props.currentDrawItems.length &&
              props.currentDrawItems[0]
            }
            languageData={props.languageData}
            activeGameId={props.activeGameId}
            toggleActiveGameId={props.toggleActiveGameId}
            isAnimationActive={props.isCurrentAnimationActive}
            isNoMoreBetsActive={props.isNoMoreBetsActive}
            mounts={props.mounts}
          />
        )}
        {/* {props.activeGame === JACKPOT && (
          <WaitingGameItem
            data={
              props.jackpotDrawItems &&
              props.jackpotDrawItems.length &&
              props.jackpotDrawItems[0]
            }
            languageData={props.languageData}
            activeGameId={props.activeGameId}
            toggleActiveGameId={props.toggleActiveGameId}
            isAnimationActive={props.isJackpotAnimationActive}
          />
        )} */}
        </ErrorBoundary>
      </div>
      <div className="historyBlock">
        <div className="historyRowHeader">
          <div className="historyLine" />
          <div className="historyText">{props.languageData.History}</div>
          <div className="historyLine" />
        </div>
        
        {props.activeGame === CURRENT && (
          <div
            className={
              props.isCurrentAnimationActive
                ? "historyBlockScroll historyBlockScrollAnimation"
                : "historyBlockScroll"
            }
          >
            <ErrorBoundary>
            {props.currentDrawItems && !!props.currentDrawItems.length &&
              props.currentDrawItems.map((item, i) => {
                if (i === 0) {
                  return null;
                }
                return (
                  <HistoryGameItem
                    languageData={props.languageData}
                    activeGameId={props.activeGameId}
                    toggleActiveGameId={props.toggleActiveGameId}
                    data={item}
                    key={item.drawId}
                    mounts={props.mounts}
                  />
                );
              })}
              </ErrorBoundary>
          </div>
        )}
        {/* {props.activeGame === JACKPOT && (
          <div
            className={
              props.isJackpotAnimationActive
                ? "historyBlockScroll historyBlockScrollAnimation"
                : "historyBlockScroll"
            }
          >
            {props.jackpotDrawItems[0] &&
              props.jackpotDrawItems.map((item, i) => {
                if (i === 0) {
                  return null;
                }
                return (
                  <HistoryGameItem
                    languageData={props.languageData}
                    activeGameId={props.activeGameId}
                    toggleActiveGameId={props.toggleActiveGameId}
                    data={item}
                    key={item.drawId}
                  />
                );
              })}
          </div>
        )} */}
      </div>
    </div>
  );
});

export default WaitingHistroyBlock;

const { CURRENT } = gameTypes;
