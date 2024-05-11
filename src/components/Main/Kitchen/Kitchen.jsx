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
              <h3>Ventilation</h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
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
              <h3>Conditioning</h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </s.KitchenCardLeftText>
          </s.KitchenCardLeft>
          <s.KitchenCardRight>
            <s.KitchenCardRightText>
              <h3>Industhial</h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
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
              <h3>Hospitl</h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </s.KitchenCardLeftText>
          </s.KitchenCardLeft>
          <s.KitchenCardRight>
            <s.KitchenCardRightText>
              <h3>Engeneering systems</h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
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
