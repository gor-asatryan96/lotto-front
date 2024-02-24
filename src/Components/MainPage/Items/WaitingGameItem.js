import React from "react";
import "../../App.css";
import waitingGameStartIcon from '../../../assets/images/waitingGameStartIcon.png'
import moment from 'moment'

const WaitingGameItem = React.memo(({ data, activeGameId, toggleActiveGameId, isAnimationActive, languageData, isNoMoreBetsActive, mounts }) => {
  const { date, drawId } = data;

  const mountName = mounts[new Date(date).getMonth()]
  const momentDate = moment(date).format('D')
  const time = moment(date).format('HH:mm')


  return (
    <>
    {data ? <>
    <div onClick={() => toggleActiveGameId(drawId)} className={isAnimationActive ? 'waitingGame waitingGameAnimation' : "waitingGame"}>
      
      <div className="WGDate">
        <div>
          <div className="waitingActiveGame">
            <img
              src={waitingGameStartIcon}
              style={{'width': '100%'}}
              alt="stop"
            />
          </div>
        </div>
        {!!momentDate && <div>{momentDate} {mountName}</div>}
        <div className="waitingGameLine" />
        {!!time && <div>{time}</div>}
      </div>
      <div className="WGDrawContainer">
        <div className='WGDraw'>
          <div>{languageData.Draw}:</div>
          <div>{drawId}</div>
        </div>
        {isNoMoreBetsActive && <div className='noMoreBets'>no more bets</div>}
      </div>
      
      <div
        className={
          activeGameId === drawId ? isAnimationActive
            ? "activeWaitingGameArrow activeOpacity waitingArrowAnimation" : 'activeWaitingGameArrow activeOpacity'
            : "activeWaitingGameArrow"
        }
      ></div>
    </div>
    </>  : ''}
    </>
  );
});

export default WaitingGameItem;
