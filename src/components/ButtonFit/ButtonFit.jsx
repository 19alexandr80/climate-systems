import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({ cont, type = "button" }) {
  return (
    <>
      <s.ButtonStyle type={type}>
        <s.SpanStyle>{cont}</s.SpanStyle>
      </s.ButtonStyle>
    </>
  );
}
