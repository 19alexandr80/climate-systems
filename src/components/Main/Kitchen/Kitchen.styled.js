import styled from "styled-components";

export const KitchenConteiner = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 16px;
  padding-bottom: 20px;
  /* margin-left: auto; */
  /* margin-right: auto; */
  background: aqua;
  @media (min-width: 414px) {
    width: 414px;
  }
  @media (min-width: 1024px) {
    width: 940px;
    padding-left: 47px;
    padding-right: 60px;
    padding-top: 120px;
    padding-bottom: 40px;
  }
  @media (min-width: 1280px) {
    width: 1190px;
    padding-left: 85px;
    padding-right: 104px;
  }
`;

export const KitchenTitle = styled.h2`
  margin-top: 12px;
  text-transform: uppercase;
  font-family: Film P3, "sans-serif";
  font-weight: 700;
  font-size: 40px;
  line-height: 43px;
  letter-spacing: 0.3em;
  color: grey;
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;
export const KitchenText = styled.div`
  font-family: "Times New Roman";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.15;
  color: black;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const KitchenCards = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const KitchenCardRight = styled.li`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    // margin-top: -240px;
  }
`;

export const KitchenCardRightText = styled.div`
  max-width: 258px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  color: brown;
  @media (min-width: 1024px) {
    // margin-bottom: -110px;
    max-width: 440px;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    min-width: 518px;
    margin-right: 65px;
    // margin-top: -60px;
  }
`;

export const KitchenCardRightImg = styled.img`
  width: 280px;
  margin-left: auto;
  margin-top: 28px;
  margin-bottom: 32px;
  background: #dadada;
  border-radius: 2px;
  box-shadow: 5px 5px 70px 17px rgba(0, 0, 0, 0.25);
  @media (min-width: 1024px) {
    max-width: 400px;
    width: 400px;
    margin-top: 0px;
    z-index: 2;
  }
  @media (min-width: 1280px) {
    max-width: 460px;
    width: 460px;
  }
`;

export const KitchenCardLeft = styled.li`
  display: flex;
  align-items: center;
  @media (max-width: 355px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    // margin-top: -60px;
  }
  @media (min-width: 1280px) {
    // margin-top: -100px;
  }
`;

export const KitchenCardLeftImg = styled.img`
  margin-right: 20px;
  max-width: 200px;
  width: 200px;
  background: #dadada;
  border-radius: 2px;
  box-shadow: 5px 5px 70px 17px rgba(0, 0, 0, 0.25);
  @media (max-width: 355px) {
    margin-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-right: 48px;
    max-width: 350px;
    width: 350px;
  }
  @media (min-width: 1280px) {
    max-width: 460px;
    width: 460px;
  }
`;

export const KitchenCardLeftText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  color: black;
  @media (min-width: 1024px) {
    width: 312px;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    // margin-top: -75px;
  }
`;
