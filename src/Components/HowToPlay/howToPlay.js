import React, { useState } from "react";
import "../App.css";
import close from "../../assets/images/close.png";
import HowToPlayPage from "./HowToPlayComponents/HowToPlayPage";
// import RulesPage from "./HowToPlayComponents/RulesPage";
// import ContactsPage from "./HowToPlayComponents/ContactsPage";

const HowToPlay = React.memo(({togglePopup, languageData, HowToPlayContent1, HowToPlayContent2, operatorContents}) => {
  
  const [activePage, setActivePage] = useState('how')

  const toggleActivePage = (page) => {
    setActivePage(page)
  }
  

  return (
    <>
      <div onClick={() => togglePopup(false)} className="popupBackground"></div>
      <div className="howToPlayBody">
        <div className="howToPlayHeader">
          <div onClick={() => toggleActivePage('how')} className={activePage === 'how' 
          ? "howToPlayNavItem activeHowToPlayHeader" : 'howToPlayNavItem'}>
            {languageData.HowtoPlay}
          </div>
          {/* <div onClick={() => toggleActivePage('rules')} className={activePage === 'rules' 
          ? "howToPlayNavItem activeHowToPlayHeader" : 'howToPlayNavItem'}>{languageData[25]}</div>
          <div onClick={() => toggleActivePage('contacts')} className={activePage === 'contacts' 
          ? "howToPlayNavItem activeHowToPlayHeader" : 'howToPlayNavItem'}>{languageData[26]}</div> */}
          <div onClick={() => togglePopup(false)}>
            <img className="closeIcon" src={close} alt="close" />
          </div>
        </div>
          {activePage === 'how' && <HowToPlayPage HowToPlayContent1={HowToPlayContent1} operatorContents={operatorContents} HowToPlayContent2={HowToPlayContent2} />}
          {/* {activePage === 'rules' && <RulesPage />}
          {activePage === 'contacts' && <ContactsPage />} */}
      </div>
    </>
  );
});

export default HowToPlay;
