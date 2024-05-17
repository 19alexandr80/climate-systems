import fotoA from "images/slaider/vent.webp";
import fotoB from "images/slaider/HE9lk19c.jpg";
import fotoC from "images/slaider/derevo_tuman_mgla_147791_1920x1080.jpg";
import fotoD from "images/slaider/j6ZFSqEW.jpg";
import fotoE from "images/slaider/jXnrfr0M.jpg";

import * as s from "./Slider.styled";

export default function Slider() {
  return (
    <>
      <s.Carusel>
        <s.SliderList>
          <s.Slide>
            <s.SlideImg src={fotoA} alt="iconSlider" width={100} height={100} />
          </s.Slide>
          <s.Slide>
            <s.SlideImg src={fotoB} alt="iconSlider" width={100} height={100} />
          </s.Slide>
          <s.Slide>
            <s.SlideImg src={fotoC} alt="icon" width={100} height={100} />
          </s.Slide>
          <s.Slide>
            <s.SlideImg src={fotoD} alt="icon" width={100} height={100} />
          </s.Slide>
          <s.Slide>
            <s.SlideImg src={fotoE} alt="icon" width={100} height={100} />
          </s.Slide>
        </s.SliderList>
      </s.Carusel>
    </>
  );
}
