import React from 'react'

const OperatorItemContent = ({name, step1, step2, step3, step4, step5, step6, step7, step8}) => {
    return (
        <div className="operatorItemContent">
         <div className="operatorNameContainer">
           <div className="operatorName">{name}</div>
           <div>
           Jinsi ya kuweka tiketi kwenye chukuatano.co.tz kutumia {name}
           </div>
         </div>
         <div className="operatorStepContainer">
           <div className="operatorStep">HATUA YA 1</div>
           <div className="operatorStepText">{step1}</div>
           <div className="operatorStep">HATUA YA 2</div>
           <div className="operatorStepText">{step2}</div>
           <div className="operatorStep">HATUA YA 3</div>
           <div className="operatorStepText">{step3}</div>
           <div className="operatorStep">HATUA YA 4</div>
           <div className="operatorStepText">{step4}</div>
           <div className="operatorStep">HATUA YA 5</div>
           <div className="operatorStepText">{step5}</div>
           <div className="operatorStep">HATUA YA 6</div>
           <div className="operatorStepText">{step6}</div>
           <div className="operatorStep">HATUA YA 7</div>
           <div className="operatorStepText">{step7}</div>
           {step8 && <><div className="operatorStep">HATUA YA 8</div>
            <div className="operatorStepText">{step8}</div></>}
         </div>
         <div>
         Inaweza kuchukua hadi dakika 10 kwa pesa kuonekana katika akaunti yako. 
         </div>
         <div>
         Ikiwa utahitaji usaidizi wowote na bashiri yako, tafadhali wasiliana na kituo chetu cha huduma kwa wateja kwa 0746 004 003 (VODA), 0677 048 625 (TIGO), 0783 785 725 (AIRTEL), 0621 457 511 (HALOTEL)
         </div>
       </div>
    )
}

export default OperatorItemContent
