import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;
export const SpanStyle = styled.span`
  font-family: Film P3, "sans-serif";
  font-size: 20px;
  width: 120px;
  height: auto;
  float: left;
  transition: 0.3s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 8px;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-radius: 8px;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-radius: 8px;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }
  &:active {
    background-color: rgb(9, 43, 56);
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    color: #2dc4ff;
  }
  &:hover:before {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.1s transform linear, 0.1s height linear 0.1s;
  }
  &:hover:after {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.1s transform linear, 0.1s height linear 0.1s;
  }
`;
