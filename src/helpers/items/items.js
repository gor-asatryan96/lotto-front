import React from 'react'
import OperatorItemContentEn from "./OperatorItemContentEn";
import OperatorItemContentSw from "./OperatorItemContentSw";
import vodacom from '../../assets/images/vodacom.png';
import airtel from "../../assets/images/airtel.png";
import halotel from "../../assets/images/halotel.png";
import tigo from "../../assets/images/tigoPesa.png";

const operatorContentsEn = [
    <OperatorItemContentEn name='M-PESA' step1='Dial*150*00#' step2="Select 4 for 'Pay by M-Pesa'" step3="Select 4 for 'Enter Business Number'"
    step4='Enter business number 800888' step5='Enter "T" then your choosen numbers (5 numbers). Example: T01234' step6='Enter amount you want to pay'
    step7='Confirm details and Enter PIN' step8='Press 1 to Confirm' />,

    <OperatorItemContentEn name='HALO PESA' step1='Dial*150*88#' step2="Select 4 for 'Pay Bills'" step3="Select 3 for 'Business Number'"
    step4='Enter business number 800888' step5='Enter "T" then your choosen numbers (5 numbers). Example: T01234' step6='Enter amount you want to pay'
    step7='Confirm details and Enter PIN' step8='Press 1 to Confirm' />,

    <OperatorItemContentEn name='TIGO PESA' step1='Dial *150*01#' step2="Select 4 for 'Pay Bills'" step3="Select 3 for 'Enter Business Number'"
    step4='Enter business number 888888' step5='Enter "T" then your choosen numbers (5 numbers). Example: T01234' step6='Enter amount you want to pay'
    step7='Confirm details and Enter PIN'  />,

    <OperatorItemContentEn name='AIRTEL MONEY' step1='Dial*150*60#' step2="Select 5 for 'Make Payments'" step3="Select 4 for 'Enter Business Number'"
    step4='Enter business number 800888' step5='Enter amount you want to pay' step6='Enter "T" then your choosen numbers (5 numbers). Example: T01234'
    step7='Enter PIN to Confirm' />
]

const operatorContentsSw = [
    <OperatorItemContentSw name='M-PESA' step1='Piga *150*00#' step2="Chagua 4 kwa 'Lipa na M-Pesa'" step3="Chagua 4 'Weka namba ya Kampuni'"
    step4='Ingiza namba ya biashara 800888' step5='Ingiza "T" kisha namba zako 5 ulizochagua. Mfano: T01234' step6='Ingiza kiasi unachotaka kulipa'
    step7='Thibitisha maelezo na Ingiza PIN yako' step8='Bonyeza 1 Kuhakiki' />,

    <OperatorItemContentSw name='HALO PESA' step1='Piga *150*88#' step2="Chagua 4 kwa 'Lipa na Bills'" step3="Chagua 3 kwa 'Weka namba ya Kampuni'"
    step4='Ingiza namba ya biashara 800888' step5='Ingiza "T" kisha namba zako 5 ulizochagua. Mfano: T01234' step6='Ingiza kiasi unachotaka kulipa'
    step7='Thibitisha maelezo na Ingiza PIN yako' step8='Bonyeza 1 Kuhakiki' />,

    <OperatorItemContentSw name='TIGO PESA' step1='Piga *150*01#' step2="Chagua 4 kwa 'Lipa na Bills'" step3="Chagua 3 'Weka namba ya Kampuni'"
    step4='Ingiza namba ya biashara 888888' step5='Ingiza "T" kisha namba zako 5 ulizochagua. Mfano: T01234' step6='Ingiza kiasi unachotaka kulipa'
    step7='Thibitisha maelezo na Ingiza PIN yako'  />,

    <OperatorItemContentSw name='AIRTEL MONEY' step1='Piga *150*60#' step2="Chagua 5 kwa 'Fanya Malipo'" step3="Chagua 4 'Weka namba ya Kampuni'"
    step4='Ingiza namba ya biashara 800888' step5='Ingiza kiasi unachotaka kulipa' step6='Ingiza "T" kisha namba zako 5 ulizochagua. Mfano: T01234'
    step7='Thibitisha maelezo na Ingiza PIN yako' />
]

export const operators = [
    { name: 'Vodacom', logo: vodacom, logoClass: 'vodaLogo', color: "#e70000" },
    { name: 'Halo Pesa', logo: halotel, logoClass: 'haloLogo', color: "#ef7d00" },
    { name: 'Tigo Pesa', logo: tigo, logoClass: 'tigoLogo', color: "#06377a" },
    { name: 'Airtel Money', logo: airtel, logoClass: 'airtelLogo', color: "#ed1b24" },

  ]

const operatorContents = {
    EN: operatorContentsEn,
    SW: operatorContentsSw
}

export const getOperatorContents = (activeLanguage) => {
    return operatorContents[activeLanguage] || operatorContents['EN']
}
