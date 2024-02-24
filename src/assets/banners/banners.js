import allDepositsEn from '../images/AllDeposits.jpg'
import airtel1En from '../images/airtel1.jpg'
import airtel2En from '../images/Airtel2.jpg'
import airtel3En from '../images/Airtel3.jpg'
import mPesa1En from '../images/MPesa1.jpg'
import mPesa2En from '../images/MPesa2.jpg'
import mPesa3En from '../images/MPesa3.jpg'
import haloPesa1En from '../images/HaloPesa1.jpg'
import haloPesa2En from '../images/HaloPesa2.jpg'
import haloPesa3En from '../images/HaloPesa3.jpg'
import tigoPesa1En from '../images/TigoPesa1.jpg'
import tigoPesa2En from '../images/TigoPesa2.jpg'
import tigoPesa3En from '../images/TigoPesa3.jpg'
import newChangesBanner from '../images/newChangesBanner.png'

import allDepositsSw from '../images/allDepositsSw.jpg'
import airtel1Sw from '../images/airtel1sw.jpg'
import airtel2Sw from '../images/airtel2sw.png'
import airtel3Sw from '../images/airtel3sw.jpg'
import mPesa1Sw from '../images/mpesa1sw.jpg'
import mPesa2Sw from '../images/mpesa2sw.jpg'
import mPesa3Sw from '../images/mpesa3sw.jpg'
import haloPesa1Sw from '../images/halotel1sw.jpg'
import haloPesa2Sw from '../images/halotel2sw.png'
import haloPesa3Sw from '../images/halotel3sw.png'
import tigoPesa1Sw from '../images/tigoPesa1sw.jpg'
import tigoPesa2Sw from '../images/tigoPesa2sw.png'
import tigoPesa3Sw from '../images/tigoPesa3sw.png'

import allDepositsFr from '../images/AllDepositsfr.jpg'
import airtel1Fr from '../images/Airtel1fr.jpg'
import airtel2Fr from '../images/Airtel2fr.jpg'
import airtel3Fr from '../images/Airtel3fr.jpg'
import mPesa1Fr from '../images/Mpesa1fr.jpg'
import mPesa2Fr from '../images/Mpesa2fr.jpg'
import mPesa3Fr from '../images/Mpesa3fr.jpg'
import haloPesa1Fr from '../images/Halotel1fr.jpg'
import haloPesa2Fr from '../images/Halotel2fr.png'
import haloPesa3Fr from '../images/Halotel3fr.png'
import tigoPesa1Fr from '../images/TigoPesa1fr.jpg'
import tigoPesa2Fr from '../images/TigoPesa2fr.png'
import tigoPesa3Fr from '../images/TigoPesa3fr.png'

const banners = {
    EN: [newChangesBanner, allDepositsEn, airtel1En, airtel2En, airtel3En, mPesa1En, mPesa2En, mPesa3En, haloPesa1En, haloPesa2En, haloPesa3En, tigoPesa1En, tigoPesa2En, tigoPesa3En],
    SW: [newChangesBanner, allDepositsSw, airtel1Sw, airtel2Sw, airtel3Sw, mPesa1Sw, mPesa2Sw, mPesa3Sw, haloPesa1Sw, haloPesa2Sw, haloPesa3Sw, tigoPesa1Sw, tigoPesa2Sw, tigoPesa3Sw],
    FR: [newChangesBanner, allDepositsFr, airtel1Fr, airtel2Fr, airtel3Fr, mPesa1Fr, mPesa2Fr, mPesa3Fr, haloPesa1Fr, haloPesa2Fr, haloPesa3Fr, tigoPesa1Fr, tigoPesa2Fr, tigoPesa3Fr],
  }

export const getBanners = (activeLanguage) => {
    return banners[activeLanguage] || banners['EN']
  }