import React from "react";

const CountDownTimerr = React.memo(({ timer, timerClass, jackpot }) => {
  let days = Math.floor(timer / (1000 * 60 * 60 * 24)).toString();
  let hours = Math.floor(
    (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();
  let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)).toString();
  let seconds = Math.floor((timer % (1000 * 60)) / 1000).toString();
  if (hours.length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  return (
      <>
    {timer && <div className={timerClass}>
      {!!+days && <>{days}d</>} {hours}:{minutes}:{seconds}
    </div>}
    </>
  );
});

export default CountDownTimerr;
