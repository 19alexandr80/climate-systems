import { FidgetSpinner, Hourglass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <FidgetSpinner
        visible={true}
        height="180"
        width="180"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
        backgroundColor="gray"
        ballColors={["#2dc4ff", "#2dc4ff", "#2dc4ff"]}
      />
    </div>
  );
};

export const LoaderHourglass = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["gray", "#2dc4ff"]}
      />
    </div>
  );
};
