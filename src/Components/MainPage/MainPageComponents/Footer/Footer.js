import React from 'react'
import '../../../App.css'
import footerBall5 from "../../../../assets/images/footerBall5.png";
import footerBall10 from "../../../../assets/images/footerBall10.png";
import desktopFooterTop from '../../../../assets/images/desktopFooterTop.png'
import footerLogo from "../../../../assets/images/footerLogo.png";
// import facebook from "../../../../assets/images/facebook.png";
// import instagram from "../../../../assets/images/instagram.png";
import LanguageBoard from './FooterComponents/LanguageBoard';


const Footer = React.memo(({activeLanguage, toggleLanguage, togglePrivacyPolicyPopup, toggleTermsOfUsePopup, languageData, toggleDrawsHistoryPopup}) => {
    return (
        <div className="footerBody">
          <img className="footerBall5" src={footerBall5} alt="ball-5" />
          <img className="footerBall10" src={footerBall10} alt="ball-10" />
          <img className="footerLogo" src={footerLogo} alt="footer-logo" />
          <img className="desktopFooterTop" src={desktopFooterTop} alt="footer-top" />
          <div className='termsHeader'>{languageData.ByPlacing}.</div>
          <div className="termsOfUseContainer">
            <div className="termsOfUseText" onClick={() => toggleDrawsHistoryPopup(true) }>{languageData.DrawHistory}</div>
            <div className="termsOfUseText" onClick={() => toggleTermsOfUsePopup(true) }>{languageData.TermsOfUse}</div>
            <div className="termsOfUseText" onClick={() => togglePrivacyPolicyPopup(true) }>{languageData.PrivacyPolicy}</div>
          </div>
          {/* <div className="socialMediaBoard">
            <div>
              <a href='https://www.facebook.com/Tovmasyan.Levon' target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="socialMediaLogo" />
              </a>
            </div>
            <div>
            <a href='https://www.instagram.com/lev.1996' target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                alt="instagram"
                className="socialMediaLogo"
              />
              </a>
            </div>
          </div> */}
          <LanguageBoard activeLanguage={activeLanguage} toggleLanguage={toggleLanguage} />
          <div className="allRightsReserved">
            &copy; 2020 {languageData.AllRightsReserved}
          </div>
        </div>
    )
})

export default Footer
