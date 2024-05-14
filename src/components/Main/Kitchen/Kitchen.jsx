import * as s from "./Kitchen.styled";

import fotoA from "../../../images/slaider/H3kFnC4y.jpg";

export default function Kitchen() {
  return (
    <>
      <s.KitchenConteiner>
        <s.KitchenText>Amet minim mollit non</s.KitchenText>
        <s.KitchenTitle>What are we doing</s.KitchenTitle>
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
              src={fotoA}
              alt="icon"
              width="100%"
              height="100%"
            />
            <s.KitchenCardLeftText>
              <h3>Кондиционирование</h3>
              <p>
                Охлаждение (подогрев) воздуха как в бытовых так и
                производствееных помещениях. Охлождение производственных
                жидкостей, для обеспечения ТУ производства. Осушение воздуха.
              </p>
            </s.KitchenCardLeftText>
          </s.KitchenCardLeft>
          <s.KitchenCardRight>
            <s.KitchenCardRightText>
              <h3>Комбинированые системы вентиляции</h3>
              <p>
                Приточно вытяжные сис-мы с подготовкой подаваемого воздуха.
                Сис-мы вентиляции предусматривающие перепады давления в
                помещениях
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
              src={fotoA}
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
              src={fotoA}
              alt="icon"
              width="100%"
              height="100%"
            />
          </s.KitchenCardRight>
        </s.KitchenCards>
      </s.KitchenConteiner>
    </>
  );
}
