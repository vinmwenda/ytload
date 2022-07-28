import { getLinkInfo } from "../../lib/link_info";
import Home from "..";

export async function getServerSideProps(context) {
  const linkInfo = await getLinkInfo();
  return {
    props: {
      linkInfo,
    },
  };
}

export default function video({ linkInfo }) {
  console.log("link", linkInfo);
  return (
    <>
      <Home />
    </>
  );
}
