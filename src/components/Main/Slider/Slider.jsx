import React, { useEffect, useState } from "react";
// import { FcNext, FcPrevious } from "react-icons/fc";

import fotoA from "images/slaider/vent.webp";
import fotoB from "images/slaider/HE9lk19c.jpg";
import fotoC from "images/slaider/derevo_tuman_mgla_147791_1920x1080.jpg";
import fotoD from "images/slaider/j6ZFSqEW.jpg";
import fotoE from "images/slaider/jXnrfr0M.jpg";
import next from "images/next.svg";
import previous from "images/previous.svg";

import * as s from "./Slider.styled";

const dataSlide = [
  { foto: fotoA, id: "1" },
  { foto: fotoB, id: "2" },
  { foto: fotoC, id: "3" },
  { foto: fotoD, id: "4" },
  { foto: fotoE, id: "5" },
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
