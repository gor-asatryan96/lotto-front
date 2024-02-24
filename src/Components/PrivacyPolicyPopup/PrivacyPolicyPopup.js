import React from "react";
import "../App.css";
import close from "../../assets/images/closeWhite.png";

const PrivacyPolicyPopup = React.memo(({ togglePopup, languageData, PrivacyContent }) => {
  return (
    <>
      <div onClick={() => togglePopup(false)} className="popupBackground"></div>
      <div className="allGamesBody">
        <div className="allGamesHeader">
          <div className="allGamesNavContainer">
            <div className="allGamesNavItem">
              <span className="checkYourNumbersText">{languageData.PrivacyPolicy}</span>
            </div>
          </div>
          <div onClick={() => togglePopup(false)}>
            <img className="closeIcon" src={close} alt="close" />
          </div>
        </div>
        <div className="SDPBody">
          {PrivacyContent && PrivacyContent}
        </div>
      </div>
    </>
  );
});

export default PrivacyPolicyPopup;
