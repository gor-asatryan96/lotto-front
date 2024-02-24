import React from "react";
import "../../App.css";
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const CNPItem = React.memo(({ data, ticketRef, languageData }) => {

  // for Jackpot -----
  // let firstNumbers = null
  // let secondNumbers = null
  // if(data.selectedNumbers.length === 10) {
  //     firstNumbers = data.selectedNumbers.slice(0, 5)
  //     secondNumbers = data.selectedNumbers.slice(5)
  //   }

  const time = moment(data.date).format('HH:mm')

  let dataAmount = data.amount.toString().split("").reverse();
  for (let i = 0; i < dataAmount.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      dataAmount[i - 1] = "." + dataAmount[i - 1];
    }
  }
  dataAmount = dataAmount.reverse().join("");

  return (
    <div ref={ticketRef ? ticketRef : null} className="CNPGameItem">
      <div>{time}</div>
      <div>{dataAmount}</div>
      <div className="selectedNumbersContainer">
      <div className="selectedNumbersBody">
      {data.selectedNumbers && data.selectedNumbers.length === 5 && data.selectedNumbers.map((num, i) => {
                 return <div key={uuidv4()}>{num}</div>
                })}
                {/* {data.selectedNumbers && data.selectedNumbers.length === 10 && firstNumbers.map((num, i) => {
                  return <div key={uuidv4()}>{num}</div>
                })} */}
                </div>
                {/* <div className='selectedNumbersBody'>
                {data.selectedNumbers && data.selectedNumbers.length === 10 && secondNumbers.map((num, i) => {
                  return <div key={uuidv4()}>{num}</div>
                })}
                </div> */}
      </div>
      {!!+data.winAmount && !(+data.winAmount > 0) && <div className="winMoto">{languageData.Win} {data.winAmount}</div>}
      {!!+data.winAmount && +data.winAmount > 0 && <div className="winAmount">WIN {data.winAmount}<sup>{languageData.Tzs}</sup></div>}
      {!!!+data.winAmount && data.status !== 'PENDING' && <div>{languageData.Lose}</div>}
      {data.status === 'PENDING' && <div className='inProgress'>{languageData.InProgress}</div>}
    </div>
  );
});

export default CNPItem;
