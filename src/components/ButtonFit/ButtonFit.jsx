import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({
  cont,
  type = "button",
  onClicCullback = null,
  argument = null,
}) {
  const onCl = () => {
    if (onClicCullback) {
      onClicCullback(argument);
    }
    return;
  };
  return (
    <>
      <s.ButtonStyle type={type} onClick={onCl}>
        <s.SpanStyle>{cont}</s.SpanStyle>
      </s.ButtonStyle>
    </>
  );
}
