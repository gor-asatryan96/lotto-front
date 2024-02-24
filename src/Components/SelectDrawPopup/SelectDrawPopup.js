import React, { useState, useEffect } from "react";
import "../App.css";
import close from "../../assets/images/closeWhite.png";
import SDPItem from "./Items/SDPItem";
import { instance } from "../../Api/Api";
import { variables } from "../../helpers/Constants";
import CurrentLastWeekItem from "./Items/CurrentLastWeekItem";
import Loader from "../Loading/Loader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Axios from "axios";

const SelectDrawPopup = React.memo((props) => {
  const [drawItems, setDrawItems] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(null);
  const [lastWeek, setLastWeek] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cancelToken = Axios.CancelToken.source()
    let _isMounted = true
    setIsLoading(true);
    instance
      .post("get-draws", {
        client: variables.client,
        // jackpot: false,
      }, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        if(_isMounted) {
        const historyItems = res.data.allDraws.map(item => {
          let date = item.date.split(/[- :]/);

          let safariDate = new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
          return {...item, date: safariDate}
        })
        setDrawItems(historyItems);
        setCurrentWeek(res.data.currentWeek);
        setLastWeek(res.data.lastWeek);
        setIsLoading(false);
      }
      })
      .catch(() => {});
      return () => {
            cancelToken.cancel()
            _isMounted = false
      }
      // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        onClick={() => props.togglePopup(false)}
        className="popupBackground"
      ></div>
      <div className="allGamesBody">
        <div className="allGamesHeader">
          <div className="allGamesNavContainer">
            <div className="allGamesNavItem">
              <span className="checkYourNumbersText">{props.languageData.SelectDraw}</span>
            </div>
          </div>
          <div onClick={() => props.togglePopup(false)}>
            <img className="closeIcon" src={close} alt="close" />
          </div>
        </div>
        <div className="SDPBody">
          <div style={{ position: "relative", height: "100%" }}>
            {isLoading && <Loader spiner="true" />}
            <div className="SDPItems">
              <ErrorBoundary>
              {drawItems && !!drawItems.length &&
                drawItems.map((item) => {
                  return (
                    <SDPItem
                      key={item.drawId}
                      data={item}
                      toggleSelectedDrawData={props.toggleSelectedDrawData}
                      selectedDrawData={props.selectedDrawData}
                      languageData={props.languageData}
                      togglePopup={props.togglePopup}
                      mounts={props.mounts}
                    />
                  );
                })}
                </ErrorBoundary>
            </div>
            {currentWeek && (
              <CurrentLastWeekItem current={true} data={currentWeek} toggleSelectedDrawData={props.toggleSelectedDrawData}
              selectedDrawData={props.selectedDrawData} languageData={props.languageData} togglePopup={props.togglePopup} 
              mounts={props.mounts} />
            )}
            {lastWeek && (
              <CurrentLastWeekItem current={false} data={lastWeek} toggleSelectedDrawData={props.toggleSelectedDrawData}
              selectedDrawData={props.selectedDrawData} languageData={props.languageData} togglePopup={props.togglePopup}
              mounts={props.mounts} />
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default SelectDrawPopup;
