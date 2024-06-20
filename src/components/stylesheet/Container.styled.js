import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  @media (min-width: 414px) {
    width: 394px;
    padding: 0 20px;
  }
  @media (min-width: 1024px) {
    width: 940px;
    padding: 0 40px;
    /* padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px; */
  }
  @media (min-width: 1280px) {
    width: 1190px;
    padding: 0 60px;
  }
`;
