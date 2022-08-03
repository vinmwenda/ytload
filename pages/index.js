import Head from "next/head";

import VideoInfo from "../Components/VideoInfo";
import Layout from "../Components/Layout";
import SearchOutput from "../Components/SearchOutput";
function Home() {
  const apiPath = "/api/videosearch";
  return (
    <>
      <Head>
        <title>Fl⚡️shLoad Downloader</title>
        <meta name="description" content="Youtube Downloader" />
      </Head>

      <Layout Content={SearchOutput} path={apiPath} />
    </>
  );
}

export default Home;
