import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Banner1 from "../../assets/cp.jpg";
import Banner2 from "../../assets/kp.jpg";
import Banner3 from "../../assets/skin.png";

const Banner = () => {
  //   const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div >
      <Carousel infiniteLoop={true} autoFocus={true} thumbWidth={100}>
        <div>
          <img className="max-h-96 image-full w-full" src={Banner1} alt="" />
        </div>
        <div>
          <img className="max-h-96 image-full" src={Banner2} alt="" />
        </div>
        <div>
          <img className="max-h-96 image-full" src={Banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
