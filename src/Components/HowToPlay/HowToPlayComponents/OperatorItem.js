import React from "react";
import arrowDown from "../../../assets/images/arrowDownWhite.png";

const OperatorItem = ({ activeOperator, toggleOperator, data, content, index }) => {
  const changeOperator = () => {
    if (activeOperator === index) {
      toggleOperator("");
    } else {
      toggleOperator(index);
    }
  };

  return (
    <div className="operatorItem" style={{ backgroundColor: data.color}}>
      <div className="operatorItemHeader" onClick={changeOperator}>
        <div className="operatorLogo">
          <img className={data.logoClass} src={data.logo} alt={data.name} />
        </div>
        <div>
          <img
            className={
              activeOperator === index
                ? "operatorArrowDown activeOperatot"
                : "operatorArrowDown"
            }
            src={arrowDown}
            alt="arrow down"
          />
        </div>
      </div>
      {activeOperator === index && content}
    </div>
  );
};

export default OperatorItem;
