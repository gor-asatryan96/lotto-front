import React from 'react'

const OperatorItemContent = ({name, step1, step2, step3, step4, step5, step6, step7, step8}) => {
    return (
        <div className="operatorItemContent">
         <div className="operatorNameContainer">
           <div className="operatorName">{name}</div>
           <div>
           How to set ticket on chukuatano.co.tz using {name}
           </div>
         </div>
         <div className="operatorStepContainer">
           <div className="operatorStep">Step 1</div>
           <div className="operatorStepText">{step1}</div>
           <div className="operatorStep">Step 2</div>
           <div className="operatorStepText">{step2}</div>
           <div className="operatorStep">Step 3</div>
           <div className="operatorStepText">{step3}</div>
           <div className="operatorStep">Step 4</div>
           <div className="operatorStepText">{step4}</div>
           <div className="operatorStep">Step 5</div>
           <div className="operatorStepText">{step5}</div>
           <div className="operatorStep">Step 6</div>
           <div className="operatorStepText">{step6}</div>
           <div className="operatorStep">Step 7</div>
           <div className="operatorStepText">{step7}</div>
           {step8 && <><div className="operatorStep">Step 8</div>
            <div className="operatorStepText">{step8}</div></>}
         </div>
         <div>
           It may take up to 10 minutes for the money to appear in your account.
         </div>
         <div>
           Should you require any assistance with bet, please contact
           our Call Centre on 0746 004 003, 0677 048 625 (TIGO), 0783 785
           725(AIRTEL)
         </div>
       </div>
    )
}

export default OperatorItemContent
