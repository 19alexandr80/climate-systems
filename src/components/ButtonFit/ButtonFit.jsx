import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({ onOpen, cont }) {
  return (
    <>
      <s.ButtonStyle type="button" onClick={onOpen}>
        <s.SpanStyle>{cont}</s.SpanStyle>
      </s.ButtonStyle>
    </>
  );
}
