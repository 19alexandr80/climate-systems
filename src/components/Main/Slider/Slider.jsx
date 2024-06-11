import React, { useEffect, useState } from "react";
// import { FcNext, FcPrevious } from "react-icons/fc";

import fotoA from "images/ventilation/Screenshot_2.png";
import fotoB from "images/ventilation/Screenshot_3.png";
import fotoC from "images/ventilation/Screenshot_4.png";
import fotoD from "images/ventilation/Screenshot_5.png";
import fotoE from "images/ventilation/Screenshot_6.png";
import fotoF from "images/ventilation/Screenshot_7.png";
import fotoG from "images/ventilation/Screenshot_8.png";
import fotoH from "images/ventilation/Screenshot_9.png";
import fotoJ from "images/ventilation/Screenshot_10.png";
import fotoK from "images/ventilation/Screenshot_11.png";
import fotoL from "images/ventilation/Screenshot_12.png";
import fotoM from "images/ventilation/Screenshot_13.png";
import fotoN from "images/ventilation/Screenshot_14.png";
import next from "images/next.svg";
import previous from "images/previous.svg";

import * as s from "./Slider.styled";

const dataSlide = [
  { foto: fotoA, id: "1" },
  { foto: fotoB, id: "2" },
  { foto: fotoC, id: "3" },
  { foto: fotoD, id: "4" },
  { foto: fotoE, id: "5" },
  { foto: fotoF, id: "6" },
  { foto: fotoG, id: "7" },
  { foto: fotoH, id: "8" },
  { foto: fotoJ, id: "9" },
  { foto: fotoK, id: "10" },
  { foto: fotoL, id: "11" },
  { foto: fotoM, id: "12" },
  { foto: fotoN, id: "13" },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [focus, setFocus] = useState(false);

  function up(x) {
    if (slideIndex + x === -1) {
      setSlideIndex(() => dataSlide.length - 1);
      return;
    }
    if (slideIndex + x === dataSlide.length) {
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
              src={dataSlide[slideIndex].foto}
              alt="iconSlider"
              width={100}
              height={100}
            />
          </s.Slide>
        </s.SliderList>
        <s.ArrowBlock>
          <div onClick={() => up(-1)}>
            {/* <FcPrevious size={50} fill="green" /> */}
            <img src={previous} width={50} height={50} alt="iconSlider" />
          </div>
          <div onClick={() => up(1)}>
            {/* <FcNext size={50} /> */}
            <img src={next} width={50} height={50} alt="iconSlider" />
          </div>
        </s.ArrowBlock>
      </s.Carusel>
    </>
  );
}
