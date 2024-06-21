import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBlock = styled.nav`
  background-color: gray;
`;
export const HeadBl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 42px;
  padding-right: 42px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    background-color: gray;
    transform: translate(
      104px,
      ${(props) => (props.clicked ? "65%" : "-150%")}
    );
    padding: 30px;
    border-radius: 20px;
    z-index: 10;
    transition: all 0.3s;
  }
`;
export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  font-family: Film P3, "sans-serif";
  color: black;
  font-size: 25px;
  &.active {
    border-bottom: 3px #2dc4ff solid;
    color: #2dc4ff;
  }
  &:hover {
    border-bottom: 3px #2dc4ff solid;
  }
`;

export const ButtonFit = styled.button`
  width: 120px;
  font-size: 24px;
  font-family: Film P3, "sans-serif";
  cursor: pointer;
  background-color: #2d59ff;
  border-radius: 12px;
  border-width: 5px;
  background-color: #4c4c71;
  &:hover {
    background: #2dc4ff;
  }
  &:focus {
    background: #2dc4ff;
  }
`;
export const ImgIcon = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;
export const BurgerIcon = styled.div`
  display: none;
  padding-bottom: 15px;
  @media (max-width: 1024px) {
    display: block;
  }
`;
export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
