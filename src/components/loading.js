import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  return (
    <>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </>
  );
}

export default LoadingSpinner;
