import React, { useState } from "react";
import "../../App.css";
import {operators } from "../../../helpers/items/items";
import OperatorItem from "./OperatorItem";

const HowToPlayPage = React.memo(({HowToPlayContent1, HowToPlayContent2, operatorContents}) => {
  const [activeOperator, setActiveOperator] = useState("");

  return (
    <div className="howToPlayContent">
      {HowToPlayContent1 && HowToPlayContent1}
      {!!operators &&
        operators.map((item, index) => {
          return (
            <OperatorItem
              activeOperator={activeOperator}
              toggleOperator={setActiveOperator}
              data={item}
              content={operatorContents[index]}
              index={index}
              key={item.name}
            />
          );
        })}
     {HowToPlayContent2 && HowToPlayContent2}

    </div>
  );
});

export default HowToPlayPage;
