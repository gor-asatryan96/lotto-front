import React from "react";
import { Slide } from "react-slideshow-image";
import "../../App.css";

const Banner = React.memo(({position, banners}) => {

  return (
    <div className={position}>
      <Slide {...properties}>
          {banners && !!banners.length && banners.map((b, i) => {
            return <img src={b} key={i} className="bannerImage" alt="banner" />
          })}
        
      </Slide>
    </div>
  );
})

export default Banner;

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: true,
  pauseOnHover: true,
}