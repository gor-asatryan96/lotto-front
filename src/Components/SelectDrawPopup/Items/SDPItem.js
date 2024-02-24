import React from "react";
import moment from 'moment'
import "../../App.css";
import timeIcon from "../../../assets/images/timeIconGreen.png";

const SDPItem = React.memo(({data, selectedDrawData, toggleSelectedDrawData, languageData, togglePopup, mounts}) => {
  
  const {date, drawId} = data

  const mountName = mounts[new Date(date).getMonth()]
  const momentDate = moment(date).format('D')
  const time = moment(date).format('HH:mm')

  const setSelectedDrawData = () => {
    toggleSelectedDrawData({
      date: `${momentDate} ${mountName}`,
      time,
      drawId,
    })
    togglePopup(false)
    
  }

  return (
    <>
      {data &&
    <div onClick={setSelectedDrawData} className={selectedDrawData && drawId  === selectedDrawData.drawId ? "SDPItem SDPActiveItem" : 'SDPItem'}>
      <div className="SDPItemDate">
        <div className="SDPItemTimeIcon">
          <img src={timeIcon} alt="time" className="SDPtimeIconImg" />
        </div>
        <div className="SDPItemDate">{momentDate} {mountName}</div>
      </div>
      <div className="SDPVerticaleLine" />
      <div className="SDPItemTime">{time}</div>
      <div className="SDPVerticaleLine" />
      <div className="SDPItemDrawId">{languageData.Draw}: {drawId}</div>
    </div>}
    </>
  );
});

export default SDPItem;
