import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({ onOpen, cont, type = "button" }) {
  return (
    <>
      <s.ButtonStyle type={type} onClick={onOpen}>
        <s.SpanStyle>{cont}</s.SpanStyle>
      </s.ButtonStyle>
    </>
  );
}
