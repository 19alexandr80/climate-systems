import fotoA from "../../../images/slaider/H3kFnC4y.jpg";
import fotoB from "../../../images/slaider/HE9lk19c.jpg";
import fotoC from "../../../images/slaider/derevo_tuman_mgla_147791_1920x1080.jpg";
import fotoD from "../../../images/slaider/j6ZFSqEW.jpg";
import fotoE from "../../../images/slaider/jXnrfr0M.jpg";

import * as s from "./Slider.styled";

export default function Slider() {
  return (
    <>
      <s.SliderList>
        <li>
          <img src={fotoA} alt="icon" width={100} height={100} />
        </li>
        <li>
          <img src={fotoB} alt="icon" width={100} height={100} />
        </li>
        <li>
          <img src={fotoC} alt="icon" width={100} height={100} />
        </li>
        <li>
          <img src={fotoD} alt="icon" width={100} height={100} />
        </li>
        <li>
          <img src={fotoE} alt="icon" width={100} height={100} />
        </li>
      </s.SliderList>
    </>
  );
}
