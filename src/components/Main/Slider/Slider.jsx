import React, { useEffect, useState } from "react";
import next from "images/next.svg";
import previous from "images/previous.svg";

import * as s from "./Slider.styled";

import * as slids from "images/ventilation";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [focus, setFocus] = useState(false);

  function up(x) {
    if (slideIndex + x === -1) {
      setSlideIndex(() => slids.slidersFoto.length - 1);
      return;
    }
    if (slideIndex + x === slids.slidersFoto.length) {
      setSlideIndex(() => 0);
      return;
    }
    setSlideIndex((prev) => {
      return prev + x;
    });
  }

  useEffect(() => {
    if (focus) return;
    const interval = setInterval(() => {
      up(1);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }); //[slideIndex, focus]

  return (
    <>
      <s.Carusel
        onMouseOver={(e) => setFocus(true)}
        onMouseOut={(e) => setFocus(false)}
      >
        <s.SliderList>
          <s.Slide>
            <s.SlideImg
              src={slids.slidersFoto[slideIndex]}
              alt="iconSlider"
              width={100}
              height={100}
            />
          </s.Slide>
        </s.SliderList>
        <s.ArrowBlock>
          <div onClick={() => up(-1)}>
            <img src={previous} width={50} height={50} alt="iconSlider" />
          </div>
          <div onClick={() => up(1)}>
            <img src={next} width={50} height={50} alt="iconSlider" />
          </div>
        </s.ArrowBlock>
      </s.Carusel>
    </>
  );
}
