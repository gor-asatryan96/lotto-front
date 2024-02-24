import React from "react";
import "../App.css";
import Banner from "./MainPageComponents/Banner";
import Header from "./MainPageComponents/Header";
// import LotoNav from "./MainPageComponents/LotoNav";
import Footer from "./MainPageComponents/Footer/Footer";
// import Loader from "../Loading/Loader";
import CheckNumberBody from "./MainPageComponents/CheckNumberBody/CheckNumberBody";
import GameBody from "./MainPageComponents/GameBody/GameBody";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


const MainPage = React.memo((props) => {
  
  return (
    <>
      <Header setActiveMenu={props.setActiveMenu} activeMenu={props.activeMenu} setActiveGame={props.setActiveGame} languageData={props.languageData} activeLanguage={props.activeLanguage} />

      <ErrorBoundary>
        {props.banners && <Banner position='lotoBanner' banners={props.banners}  />}
      </ErrorBoundary>

      <div className="desktopGameContainer">
        <div>
            {/* <div className="loadingContainer">
              <LotoNav
                activeGame={props.activeGame}
                setActiveGame={props.setActiveGame}
                languageData={props.languageData}
              />
            {props.isHistoryBlockLoading && <Loader />}
            </div> */}
            
            <GameBody
              {...props}
            />
        </div>
        <div>
          <CheckNumberBody
          setCheckPopupItems={props.setCheckPopupItems}
          toggleCheckPopupLoading={props.toggleCheckPopupLoading}
          toggleHowToPlayPopup={props.toggleHowToPlayPopup}
            toggleSelectDrawPopup={props.toggleSelectDrawPopup}
            toggleCheckNumberPopup={props.toggleCheckNumberPopup}
            selectedDrawData={props.selectedDrawData}
            activeGame={props.activeGame}
            checkNumber={props.checkNumber}
            setCheckNumber={props.setCheckNumber}
            languageData={props.languageData}
            isBodyLock={props.isBodyLock}
            banners={props.banners}
          />
        </div>
      </div>

      <Footer
        activeLanguage={props.activeLanguage}
        toggleLanguage={props.setActiveLanguage}
        togglePrivacyPolicyPopup={props.togglePrivacyPolicyPopup}
        toggleTermsOfUsePopup={props.toggleTermsOfUsePopup}
        toggleDrawsHistoryPopup={props.toggleDrawsHistoryPopup}
        languageData={props.languageData}
      />
    </>
  );
})

export default MainPage;
