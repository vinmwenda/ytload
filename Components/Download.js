import Spinner from "react-bootstrap/Spinner";
export const Download = ({ styles, show }) => {
  return (
    <div className={show ? styles.downloadContainer : "preloader-none"}>
      <div className={styles.download}>
        <div>Redirecting to download...</div>{" "}
        <div className="loader mt-3 mb-3"></div>
        <span>please wait for download to start</span>
      </div>
    </div>
  );
};
