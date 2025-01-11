import styled from "styled-components";
// import fotoA from "images/ventilation/Screenshot_9.png";

export const ProjectsDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5));
  background-size: cover;
  width: 100%;
  min-height: 630px;
`;
// =================================================================
export const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
  &:hover ~ .content {
    display: block;
  }
`;
export const Dropbtn = styled.div`
  padding: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover ~ .content {
    display: block;
  }
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  border-radius: 5px;
  background-color: gray;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  :hover {
    display: block;
  }
  div {
    padding: 4px 8px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
// =====================================================
export const Ul = styled.ul`
  margin-bottom: 0px;
  padding-left: 10px;
  list-style: none;
`;
