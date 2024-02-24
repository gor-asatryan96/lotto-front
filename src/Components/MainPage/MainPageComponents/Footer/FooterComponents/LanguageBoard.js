import React from 'react'
import '../../../../App.css'
import EnFlag from "../../../../../assets/images/englandFlag.png";
import SwFlag from "../../../../../assets/images/tanzaniaFlag.png";
import FrFlag from "../../../../../assets/images/franceFlag.png";
import { languageTypes } from '../../../../../helpers/Constants';


const LanguageBoard = React.memo(({activeLanguage, toggleLanguage}) => {

    const toggleLanguages = (language) => {
        toggleLanguage(language)
    }

    return (
        <div className="languageBoard">
            <div className="languageContainers" onClick={() => toggleLanguages(EN)}>
              <div className={activeLanguage === EN ? "activeLanguageFlag" : ''}>
                <img className="flagImgs" src={EnFlag} alt="English" />
              </div>
              <div className={ activeLanguage === EN ? "languageText activelanguageText" : 'languageText'}>EN</div>
            </div>
            <div className="languageContainers" onClick={() => toggleLanguages(SW)}>
              <div className={activeLanguage === SW ? "activeLanguageFlag" : ''}>
                <img className="flagImgs" src={SwFlag} alt="Tanzania" />
              </div>
              <div className={ activeLanguage === SW ? "languageText activelanguageText" : 'languageText'}>SW</div>
            </div>
            <div className="languageContainers" onClick={() => toggleLanguages(FR)}>
              <div className={activeLanguage === FR ? "activeLanguageFlag" : ''}>
                <img className="flagImgs" src={FrFlag} alt="France" />
              </div>
              <div className={ activeLanguage === FR ? "languageText activelanguageText" : 'languageText'}>FR</div>
            </div>
          </div>
    )
})

export default LanguageBoard


const {EN, SW, FR} = languageTypes