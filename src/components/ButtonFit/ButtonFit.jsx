import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({ onOpen }) {
  return (
    <>
      <s.ButtonStyle type="button" onClick={onOpen}>
        <s.SpanStyle>Обратная связь</s.SpanStyle>
      </s.ButtonStyle>
    </>
  );
}
