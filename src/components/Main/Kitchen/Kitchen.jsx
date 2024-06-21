import * as s from "./Kitchen.styled";

import fotoA from "images/ventilation/Screenshot_52.png";
import fotoB from "images/ventilation/Screenshot_53.png";
import fotoC from "images/ventilation/Screenshot_54.png";
import fotoD from "images/ventilation/Screenshot_55.png";
import fotoE from "images/ventilation/Screenshot_56.png";

export default function Kitchen() {
  return (
    <>
      <s.KitchenTitle>modern technologies for inner harmony</s.KitchenTitle>
      <s.KitchenCards>
        <s.KitchenCardRight>
          <s.KitchenCardRightText>
            <h3>Вентиляция</h3>
            <p>
              Обеспечение притока свежего воздуха, и вывод вредных газов из
              помещения. Отвод технических газов, излишнего тепла и пара
            </p>
          </s.KitchenCardRightText>
          <s.KitchenCardRightImg
            src={fotoA}
            alt="icon"
            width="100%"
            height="100%"
          />
        </s.KitchenCardRight>
        <s.KitchenCardLeft>
          <s.KitchenCardLeftImg
            src={fotoB}
            alt="icon"
            width="100%"
            height="100%"
          />
          <s.KitchenCardLeftText>
            <h3>Кондиционирование</h3>
            <p>
              Охлаждение (подогрев) воздуха как в бытовых так и производствееных
              помещениях. Охлождение производственных жидкостей, для обеспечения
              ТУ производства. Осушение воздуха.
            </p>
          </s.KitchenCardLeftText>
        </s.KitchenCardLeft>
        <s.KitchenCardRight>
          <s.KitchenCardRightText>
            <h3>Комбинированые системы вентиляции</h3>
            <p>
              Приточно вытяжные сис-мы с подготовкой подаваемого воздуха. Сис-мы
              вентиляции предусматривающие перепады давления в помещениях
            </p>
          </s.KitchenCardRightText>
          <s.KitchenCardRightImg
            src={fotoC}
            alt="icon"
            width="100%"
            height="100%"
          />
        </s.KitchenCardRight>
        <s.KitchenCardLeft>
          <s.KitchenCardLeftImg
            src={fotoD}
            alt="icon"
            width="100%"
            height="100%"
          />
          <s.KitchenCardLeftText>
            <h3>Асперация и пневмотранспорт</h3>
            <p>
              Обеспечение транспартировки сыпучих продуктов. Отвод образивов,
              стружки из робочих зон
            </p>
          </s.KitchenCardLeftText>
        </s.KitchenCardLeft>
        <s.KitchenCardRight>
          <s.KitchenCardRightText>
            <h3>Engeneering systems</h3>
            <p>
              Отопление, водопровод, канализация. Системы автоматизации и
              удалённого контроля
            </p>
          </s.KitchenCardRightText>
          <s.KitchenCardRightImg
            src={fotoE}
            alt="icon"
            width="100%"
            height="100%"
          />
        </s.KitchenCardRight>
      </s.KitchenCards>
    </>
  );
}
