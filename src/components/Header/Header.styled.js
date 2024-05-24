import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBlock = styled.div`
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
    // background: #2dc4ff;
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
