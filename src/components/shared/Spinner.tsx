import spinner from "../../assets/spinner.gif";

function Spinner() {
  return (
    <img
      style={{
        display: "block",
        width: "100px",
        margin: "auto",
      }}
      src={spinner}
      alt="loading..."
    />
  );
}

export default Spinner;
