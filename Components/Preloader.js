import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <ThreeDots ariaLabel="loading" color="#343e47" height={100} width={100} />
    </div>
  );
}

export default Preloader;