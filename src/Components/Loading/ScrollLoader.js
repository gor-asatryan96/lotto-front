import React from "react";
import './ScrollLoader.css'

const ScrollLoader = ({colorChange}) => {
  return (
    <div className='lds-ellipsis'>
      <div className={colorChange && "spinnerColorChange"}></div>
      <div className={colorChange && "spinnerColorChange"}></div>
      <div className={colorChange && "spinnerColorChange"}></div>
      <div className={colorChange && "spinnerColorChange"}></div>
    </div>
  );
};

export default ScrollLoader;
