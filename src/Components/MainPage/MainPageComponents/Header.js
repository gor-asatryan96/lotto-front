import React, { useEffect, useState } from 'react'
import '../../App.css'
import chukuaLogo from "../../../assets/images/ChukuaLogo.svg";
import { getLogoUrl } from '../../../assets/Languages/Languages';
import Navbar from './Navbar/Navbar';
import CountDownTimerr from '../../CountDownTimer/CountDownTimer';
import { NAVBAR_NAMES } from '../../../constants/names';
// import { gameTypes } from '../../../helpers/Constants'
// import CountDownTimer from '../../CountDownTimer/CountDownTimer';

const Header = React.memo(({setActiveMenu, activeMenu, setActiveGame, jackpotAmount = 1000000, jackpotTimer = 1000000, languageData, activeLanguage}) => {
    
    // const toggleActiveGame = () => {
    //     setActiveGame(JACKPOT)
    // }
    const [logoUrl, setLogoUrl] = useState('')

    useEffect(()=> {
      setLogoUrl(getLogoUrl(activeLanguage))
    }, [activeLanguage])

    return (
        <div className="lotoHeader">
          <div className="lotoHeaderLogo">
            <img src={chukuaLogo} className="logo" alt="logo" />
          </div>
           <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <span className="lotoHeaderVerticalLine" />
          {/* <div className="lotoHeaderJackpot"> */}

            <div className="weeklyWrapper">
               <div className="weeklyPrizeText">
                   {activeMenu === NAVBAR_NAMES.DAILY ? languageData['daily'] : languageData['weekly']} PRIZE
               </div>
               <div className="weeklyPriceCount">1.000.000 <sup className="tzsText">Tzs</sup></div>
            </div>
            
           {/* <img src={logoUrl} className="PMLogo" alt="PM logo" /> */}
          {/* </div> */}

          {/* <span className="lotoHeaderVerticalLine" />
          <div className="lotoHeaderJackpot">
            <div>
              {!jackpotTimer && <div>No&nbsp;</div>}
              <div>{languageData[1]}</div>
              {jackpotTimer && <CountDownTimerr jackpot={true} timerClass='jackpotTime' timer={jackpotTimer} />}
            </div>
            {jackpotTimer && <div className="lotoDesktopHeaderVerticalLine"></div> }
            <div>
            {jackpotAmount && jackpotTimer && <div className="jackpotPrice">{jackpotAmount}<sup className="jackpotCurrency">Tzs</sup></div>}
            </div>
          </div> */}
        </div>
    )
})

export default Header