import React from 'react'
import timeIcon from "../../../assets/images/timeIconGreen.png";
import moment from 'moment'

const CurrentLastWeekItem = ({current, data, toggleSelectedDrawData, selectedDrawData, languageData, togglePopup, mounts}) => {
    let isCurrent = current ? languageData.CurrentWeek : languageData.LastWeek;
    const {weekDate, weekRacesCount} = data

    const mountFirstName = mounts[new Date(weekDate[0]).getMonth()]
    const mountLastName = mounts[new Date(weekDate[1]).getMonth()]
    const mountFirstDate = moment(weekDate[0]).format('D')
    const moountLastDate = moment(weekDate[1]).format('D')

    const setSelectedDrawData = () => {
        toggleSelectedDrawData({
          week:  current ? true : false,
          date: `${mountFirstDate} ${mountFirstName} - ${moountLastDate} ${mountLastName}`,
          draws: `${weekRacesCount}`
        })
        togglePopup(false)
      }

    return (
        <div onClick={setSelectedDrawData} className="SDPCurrentLastWeek">
            <div className={selectedDrawData && selectedDrawData.week === isCurrent ? "SDPItem SDPActiveItem" : 'SDPItem'} >
              <div className="SDPItemDate">
                <div className="SDPItemTimeIcon">
                  <img src={timeIcon} alt="time" className="SDPtimeIconImg" />
                </div>
                <div className="SDPItemDate SDPCurrentLastColor">
                  {isCurrent}
                </div>
              </div>
              <div className="SDPVerticaleLine" />
              <div className="SDPItemTime">{`${mountFirstDate} ${mountFirstName} - ${moountLastDate} ${mountLastName}`}</div>
              <div className="SDPVerticaleLine" />
              <div className="SDPItemDrawId">{weekRacesCount} {languageData.Draws}</div>
            </div>
          </div>
    )
}

export default CurrentLastWeekItem
