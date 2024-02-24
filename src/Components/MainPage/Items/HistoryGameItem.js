import React from 'react'
import moment from 'moment'
import '../../App.css'
import history from "../../../assets/images/history.png";

const HistoryGameItem = React.memo(({data, activeGameId, toggleActiveGameId, languageData, mounts}) => {

  
  const {date, drawId} = data

  const mountName = mounts[new Date(date).getMonth()]
  const momentDate = moment(date).format('D')
  const time = moment(date).format('HH:mm')


    return (
      <>
      {data &&
        <div onClick={ () => toggleActiveGameId(drawId)} className={activeGameId === drawId ? 'historyGame historyGameActive' : 'historyGame' }>
                <div className="WGDate">
                  <div>
                    <img
                      src={history}
                      className="historyActiveGame"
                      alt="history"
                    />
                  </div>
                  {!!momentDate && <div>{momentDate} {mountName}</div> }
                  <div className="waitingGameLine" />
                  {!!time && <div>{time}</div> }
                </div>
                <div className='WGDrawContainer'>
                <div className="WGDraw">
                  <div>{languageData.Draw}:</div>
                  <div>{drawId}</div>
                </div>
                </div>
                <div className={activeGameId === drawId ? 'activeHistoryGameArrow activeOpacity' : 'activeHistoryGameArrow'}></div>
              </div>
        }
        </>
    )
})

export default HistoryGameItem
