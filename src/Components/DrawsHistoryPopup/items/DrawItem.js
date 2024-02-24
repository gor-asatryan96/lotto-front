import React from "react";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";
import moment from 'moment'

const DrawItem = React.memo(({ data  }) => {

    const date = moment(data.date).format('DD.MM.YYYY')
    const time = moment(data.date).format('HH:mm')

  return (
    <div className="drawItemContainer">
        <div className='drawItem'>
        <div>{data.drawId}</div>
      <div>{date}</div>
      <div>{time}</div>
      <div className="selectedNumbersContainer">
        <div className="selectedNumbersBody">
          {data.winnerBalls &&
            !!data.winnerBalls &&
            data.winnerBalls.map(num => {
              return <div key={uuidv4()}>{num}</div>;
            })}
        </div>
      </div>
      </div>
    </div>
  );
});

export default DrawItem;
