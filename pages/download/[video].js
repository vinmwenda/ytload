import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Container, Row } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { useRouter } from "next/router";
import Dynamic from "../../Components/Dynamic";

const Videos = () => {
  const apiPath = "/api/video";
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      {" "}
      <Head>
        <title>VIDEOS</title>
        <meta name="description" content="Youtube Downloader" />
      </Head>
      <Layout Content={Dynamic} path={apiPath} />
    </>
  );
};
export default Videos;
