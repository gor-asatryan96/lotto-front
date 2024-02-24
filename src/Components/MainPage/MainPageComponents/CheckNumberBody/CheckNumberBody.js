import React from "react";
import "../../../App.css";
import arrowDown from "../../../../assets/images/arrowDown.png";
import howToPlay from "../../../../assets/images/howToPlay.png";
import Banner from "../Banner";


const CheckNumberBody = React.memo((props) => {

  const changeNumber = (e) => {
    const re = /^[0-9\b]+$/
    if(e.target.value === '' || re.test(e.target.value)){
      props.setCheckNumber(e.target.value)
    }
    
  }

  const checkItems = async () => {
    props.toggleCheckNumberPopup(true)
    localStorage.setItem('number', props.checkNumber)
  }
  const pressEnterKey = (e) => {
    if(e.key === "Enter" && !!!disableButton) {
      checkItems()
    }
  }

  const disableButton = !props.checkNumber || !props.selectedDrawData || props.checkNumber.toString().length < 7 || props.checkNumber.toString().length > 9

  return (
    <div className="checkNumberBody">
      <div
        onClick={() => props.toggleHowToPlayPopup(true)}
        className="howToPlay"
      >
        <img src={howToPlay} alt="how to play" />
      </div>
     {props.banners && <Banner position='lotoDesktopBanner' banners={props.banners} />}
      <div className="checkNumbersHeader">
        <div>{props.languageData.CheckYourNumbers}</div>
        <div>
          <img className="arrowDownIcon" src={arrowDown} alt="arrow-down" />
        </div>
      </div>
      <div className="checkNumberBoards">
        <div className="checkNumberTexts">{props.languageData.YourPhonenumber}</div>
        <div className="checkNumberFields">
          <div className="phoneIndex">(+255)</div>
          <div className="phoneNumberVerticalLine" />
          <div className="phoneNumberInputContainer">
            <input disabled={props.isBodyLock} value={props.checkNumber} onChange={changeNumber} onKeyPress={pressEnterKey} type='tel' 
            className="phoneNumberIpnut" pattern="[0-9]" maxLength={9} />
          </div>
          {!!props.checkNumber && <div onClick={() => props.setCheckNumber('')} className='clearInput'>
            <p>&#10006;</p>
          </div>}
        </div>
      </div>
      <div className="checkNumberBoards">
        <div className="checkNumberTexts">{props.languageData.ChooseDrawID}</div>
        <div
          onClick={() => props.toggleSelectDrawPopup(true)}
          className="checkNumberFields pointer"
        >
          <div className="chooseDrawIdContainer">
            <div>
              {props.selectedDrawData && (
                <div className="selectedDrawData">
                  {/* {props.selectedDrawData.week && <div>{props.selectedDrawData.week}</div>} */}
                  {props.selectedDrawData.drawId && <div>{props.languageData.Draw}:</div>}
                  {props.selectedDrawData.drawId && <div>{props.selectedDrawData.drawId}</div>}
                  {props.selectedDrawData.draws && <div>{props.selectedDrawData.draws} {props.languageData.Draws} </div>}
                  {props.selectedDrawData.draws && <div className="phoneNumberVerticalLine" />}
                  
                  <div>{props.selectedDrawData.date}</div>
                  {props.selectedDrawData.time && <div className="phoneNumberVerticalLine" />}
                  {props.selectedDrawData.time && <div>{props.selectedDrawData.time}</div>}
                </div>
              )}
            </div>
            <div>
              <img className="arrowDownIcon" src={arrowDown} alt="arrow-down" />
            </div>
          </div>
        </div>
      </div>
      <div className="checkButtonBoard">
        <div className="checkButtonContainer">
          <button
            onClick={checkItems}
            className={!disableButton ? "checkButton" : 'checkButton buttonDisabled'}
            disabled={disableButton}
          >
            {props.languageData.Check}
          </button>
        </div>
      </div>
    </div>
  );
});

export default CheckNumberBody;