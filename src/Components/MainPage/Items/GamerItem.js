import React from 'react'
import '../../App.css'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const GamerItem = React.memo(({data, winner, ticketRef, languageData, winnerBalls}) => {
    
    let firstNumbers = null
    let secondNumbers = null
    if(data.selectedNumbers.length === 10) {
      firstNumbers = data.selectedNumbers.slice(0, 5)
      secondNumbers = data.selectedNumbers.slice(5)
    }

    const time = moment(data.date).format('HH:mm')
    let dataAmount = data.amount.toString().split('').reverse()
      for (let i = 0; i < dataAmount.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            dataAmount[i-1] = '.' + dataAmount[i-1]
        }
        
    }
    dataAmount = dataAmount.reverse().join('')

    return (
        <div ref={ticketRef ? ticketRef : null} className={winner ? "gamerItemContainer winnerContainer" : 'gamerItemContainer'}>
          <div className="gamerItem">
              <div>{data.gamerId}</div>
              <div>{time}</div>
              <div>{dataAmount}</div>
              <div className="selectedNumbersContainer">
                <div className='selectedNumbersBody'>
                {data.selectedNumbers && data.selectedNumbers.length === 5 && data.selectedNumbers.map((num, i) => {
                  if(winnerBalls[i] === num) {
                    return <div key={uuidv4()} className='playerWinnerBall'>{num}</div>
                  }
                 return <div className='noWinnerBall' key={uuidv4()}>{num}</div>
                })}
                {data.selectedNumbers && data.selectedNumbers.length === 10 && firstNumbers.map((num, i) => {
                  return <div key={uuidv4()}>{num}</div>
                })}
                </div>
                <div className='selectedNumbersBody'>
                {data.selectedNumbers && data.selectedNumbers.length === 10 && secondNumbers.map((num, i) => {
                  return <div key={uuidv4()}>{num}</div>
                })}
                </div>
              </div>
              {!!data.winAmount && isNaN(+data.winAmount) && data.status !== 'PENDING' && <div className="winMoto">{data.winAmount}</div>}
              {!!+data.winAmount && +data.winAmount > 0 && <div className="winAmount">{data.winAmount}<sup>{languageData.Tzs}</sup></div>}
              {!!!+data.winAmount && data.status === 'LOSE' && !isNaN(+data.winAmount) && <div>{languageData.Lose}</div>}
              {data.status === 'PENDING' && <div className='inProgress colorWhite'>{languageData.InProgress}</div>}
              </div>
              {/* {winner && <div className='winnerRow'>WIN {+data.winAmount > 0 ? (<>{data.winAmount}<sup className='tzsSup'>Tzs</sup> </>) : data.winAmount}</div>} */}
            </div>
            
    )
})

export default GamerItem
