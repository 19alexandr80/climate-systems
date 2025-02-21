import * as s from "components/ButtonFit/ButtonFit.styled";

export default function ButtonFitback({
  cont,
  type = "button",
  onClicCullback = null,
}) {
  const onCl = () => {
    if (onClicCullback) {
      onClicCullback();
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
