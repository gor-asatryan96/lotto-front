import React from "react";
import "../App.css";
import close from "../../assets/images/closeWhite.png";
import searchIcon from "../../assets/images/searchIcon.png";
import GamerItem from "../MainPage/Items/GamerItem";
import Loader from "../Loading/Loader";
import ScrollLoader from "../Loading/ScrollLoader";
import NoGamerItem from "../MainPage/Items/NoGamerItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { v4 as uuidv4 } from 'uuid'

const AllGamesPopup = React.memo(({togglePopup, activeGameId, allGamers, languageData, isLoading, gamersItems, inputNumber, changeNumber,
                                  pressEnterKey, searchTickets, lastTicketRef, scrollLoading, setInputNumber, isSearchDissable,
                                  waitingCurrentWinnerBalls, historyWinnerBalls, isWaitingGameActive}) => {
    return (
      <>
        <div
          onClick={() => togglePopup(false)}
          className="popupBackground"
        ></div>
        <div className="allGamesBody">
          <div className="allGamesHeader">
            <div className="allGamesNavContainer">
              <div className="allGamesNavItem">
                {languageData.AllGamers} {allGamers}
              </div>
              <div className="allGamesNavItem">
                <span>{languageData.Draw}:&nbsp;&nbsp;</span>
                {activeGameId}
              </div>
            </div>
            <div onClick={() => togglePopup(false)}>
              <img className="closeIcon" src={close} alt="close" />
            </div>
          </div>
          <div style={{ position: "relative", height: "100%" }}>
            {isLoading && <Loader spiner="true" />}
            <div className="numberSearchBar">
              <div className="checkNumberBoards">
                <div className="allGamesSearchNumberText">
                  {languageData.SearchNumber}
                </div>
                <div className="checkNumberFields">
                  <div className="phoneIndex">(+255)</div>
                  <div className="phoneNumberVerticalLine" />
                  <div className="searchNumberInputContainer">
                    <input
                      value={inputNumber}
                      onChange={changeNumber}
                      onKeyPress={pressEnterKey}
                      className="phoneNumberIpnut"
                      type="tel"
                      maxLength={9}
                      pattern="[0-9]"
                    ></input>
                  </div>
                  {!!inputNumber && (
                    <div
                      onClick={() =>  setInputNumber("")}
                      className="clearInput"
                    >
                      <p>&#10006;</p>
                    </div>
                  )}
                  {!!!isSearchDissable && <div className="searchIconContainer" onClick={searchTickets}>
                    <img src={searchIcon} alt="search" className="searchIcon" />
                  </div>}
                </div>
              </div>
            </div>
            <div className="gamersBoardPopup">
              <div className="gamersBoardHeader colorChange">
                <div>{languageData.Gamers}</div>
                <div>{languageData.Time}</div>
                <div>{languageData.Bet}</div>
                <div>{languageData.Combination}</div>
                <div>{languageData.Win}</div>
              </div>
              <div className="gamersItem">
                <ErrorBoundary>
                  {gamersItems.length !== 0 ? (
                    gamersItems.map((item, index) => {
                      if (gamersItems.length === index + 1) {
                        return (
                          <GamerItem
                            winnerBalls={isWaitingGameActive ? waitingCurrentWinnerBalls : historyWinnerBalls}  
                            ticketRef={lastTicketRef}
                            data={item}
                            key={uuidv4()}
                            languageData={languageData}
                          />
                        );
                      } else {
                        return <GamerItem 
                                  winnerBalls={isWaitingGameActive ? waitingCurrentWinnerBalls : historyWinnerBalls}  
                                  data={item} 
                                  key={uuidv4()} 
                                  languageData={languageData} />;
                      }
                    })
                  ) : (
                    <NoGamerItem languageData={languageData} />
                  )}
                </ErrorBoundary>
                {scrollLoading && (
                  <div className="seeAllGamersScrollLoading">
                    <ScrollLoader colorChange="true" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default AllGamesPopup;
