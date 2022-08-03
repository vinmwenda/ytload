import Spinner from "react-bootstrap/Spinner";

function Preloader({ load }) {
  return (
    <div className={load ? "center" : "preloader-none"}>
      {" "}
      <div className="mt-5">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>
      <div>Loading video Information please wait.....</div>
    </div>
  );
}

export default Preloader;
