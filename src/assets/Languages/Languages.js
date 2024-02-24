import English from './json/en.json'
import Franch from './json/fr.json'
import Swahili from './json/sw.json'
import TermsOfUseEn from './components/TermsOfUse/TermsOfUseEn'
import TermsOfUseFr from './components/TermsOfUse/TermsOfUseEn'
import TermsOfUseSw from './components/TermsOfUse/TermsOfUseSw'
import PrivacyPolicyEN from './components/PrivacyPolicy/PrivacyPolicyEN'
import PrivacyPolicySw from './components/PrivacyPolicy/PrivacyPolicySw'
import HowToPlayEn from './components/HowToPlay/HowToPlayEn'
import HowToPlaySw from './components/HowToPlay/HowToPlaySw'
import PMLogoEn from '../images/byPlaymasterLogo.svg'
import PMLogoSw from '../images/PMLogoSw.svg'
import PMLogoFr from '../images/PMLogoFr.svg'
import winEn from "../images/win.png";
import winSw from "../images/WinSw.svg";
import winFr from "../images/WinFr.svg";
import weeklyPrizeEn from '../images/weeklyPrizeEn.png'
import weeklyPrizeFr from '../images/weeklyPrizeFr.png'
import weeklyPrizeSw from '../images/weeklyPrizeSw.png'
import dailyPrizeEn from '../images/dailyPrizeEn.png'
import dailyPrizeFr from '../images/dailyPrizeFr.png'
import dailyPrizeSw from '../images/dailyPrizeSw.png'
import { NAVBAR_NAMES } from '../../constants/names'

const { NOW, DAILY, WEEKLY } = NAVBAR_NAMES



const mounts = {
  EN: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  SW: ['Jan','Feb','Mac', 'Apr','Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Dis'],
  FR: ['Jan','Fév','Mar', 'Avr','Mai', 'Jui', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
}

const languages = {
    EN: English,
    FR: Franch,
    SW: Swahili
}

const termsOfUse = {
  EN: TermsOfUseEn,
  FR: TermsOfUseFr,
  SW: TermsOfUseSw
}

const privacyPolicy = {
  EN: PrivacyPolicyEN,
  SW: PrivacyPolicySw
}

const howToPlay1 = {
  EN: HowToPlayEn({part1: true}),
  SW: HowToPlaySw({part1: true}),
}

const howToPlay2 = {
  EN: HowToPlayEn({part2: true}),
  SW: HowToPlaySw({part2: true}),
}

const logoUrls = {
  EN: PMLogoEn,
  SW: PMLogoSw,
  FR: PMLogoFr
}

const winUrls = {
  EN: winEn,
  SW: winSw,
  FR: winFr
}

const weeklyPrizeUrls = {
  EN: weeklyPrizeEn,
  SW: weeklyPrizeSw,
  FR: weeklyPrizeFr
}

const dailyPrizeUrls = {
  EN: dailyPrizeEn,
  SW: dailyPrizeSw,
  FR: dailyPrizeFr
}

const menuLogoUrls = {
  [NOW]: winUrls,
  [DAILY]: dailyPrizeUrls,
  [WEEKLY]: weeklyPrizeUrls,
}
  
export const getLanguageData = (activeLanguage) => {
    return languages[activeLanguage] || languages['EN']
  }

export const getContent = (page ,activeLanguage) => {
  let currentPage;
    if(page === 'terms'){
      currentPage = termsOfUse
    } else if(page === 'privacy') {
      currentPage = privacyPolicy
    } else if(page === 'how1') {
      currentPage = howToPlay1
    } else if(page === 'how2') {
      currentPage = howToPlay2
    }
    return currentPage[activeLanguage] || currentPage['EN']
}


export const getMounts = (activeLanguage) => {
  return mounts[activeLanguage] || mounts['EN']
}

export const getLogoUrl = (activeLanguage) => {
  return logoUrls[activeLanguage] || logoUrls['EN']
}

export const getBoardLogoUrl = (language, menu) => {
  const urls = menuLogoUrls[menu] || menuLogoUrls[NOW]
  return urls[language] || urls['EN']
}