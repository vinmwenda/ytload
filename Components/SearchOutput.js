import React, { useEffect, useMemo, useState } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import {
  PatchCheckFill,
  CloudArrowDownFill,
  Download,
} from "react-bootstrap-icons";
import ReactPlayer from "react-player/youtube";
import axios from "axios";
import DownloadOutput from "./DownloadOutput";
import Link from "next/link";

const SearchOutput = ({ data }) => {
  const [info, setInfo] = useState([]);
  const [downloadInfo, setDownloadInfo] = useState();

  console.log(info);
  useEffect(() => {
    const fetchData = () => {
      return data.items !== undefined
        ? [
          ...(data.items.filter((x) => x.title === "New for you")[0] !==
            undefined
            ? data.items.filter((x) => x.title === "New for you")[0].items
            : []),
          ...data.items.filter((x) => x.title !== "New for you"),
        ]
        : [];
    };

    setInfo(fetchData());
  }, [data]);
  const fetchDownloadInfo = async (url) => {
    const response = await axios.post("/api/download", { data: url });
    setDownloadInfo(response.data);

    console.log(downloadInfo);
  };
  return (
    <>
      <Container className="mt-3 mb-2 rel">
        {/* <Col sm={6} lg={6} className="">
          <DownloadOutput />
        </Col> */}

        <Row>
          {info &&
            [info.map((x) => x.author)].map((x) => x.name) !== "undefined" ? (
            info.map((x) => (
              <Col
                // onClick={() => fetchDownloadInfo(x.url)}
                className="mt-3 show-title "
                key={x.url}
                sm={6}
                md={3}
                lg={4}
              >
                {/* <NextImage
                  imageUrl={[x.bestThumbnail].map((x) => x.url)}
                  title={x.title}
                /> */}
                <div className="rel ">
                  <ReactPlayer
                    playing={false}
                    loop={true}
                    playbackRate={1}
                    width=""
                    controls={true}
                    height={200}
                    url={x.url}
                  // config={{
                  //   youtube: {
                  //     playerVars: { showinfo: 1 }
                  //   }
                  // }}
                  // muted={true}
                  />
                  <div className="abs">
                    <Badge bg="dark">{x.duration}</Badge>
                  </div>
                </div>

                <div
                  style={{ fontWeight: "bold", fontSize: "12px" }}
                  className="title mt-2 "
                >
                  {x.title}
                </div>
                <div className="channelInfo">
                  <span>
                    {(info[info.indexOf(x)].author &&
                      info[info.indexOf(x)].author.name) ||
                      "Unknown Channel"}{" "}
                  </span>
                  <span>
                    {`${info[info.indexOf(x)].author &&
                      info[info.indexOf(x)].author["verified"] === "true"
                      }` && <PatchCheckFill style={{ color: "red" }} />}
                  </span>

                  <div>
                    <span>{x.views} views</span>
                    <span className="mx-1">.</span>
                    <span> {x.uploadedAt}</span>
                  </div>
                </div>
                <Row>
                  {" "}
                  <div className="downloadbtn">
                    <Link href={`/download/${x.id}`}>
                      <a>
                        {" "}
                        <Button
                          size="sm"
                          className="m-1"
                          variant="outline-danger"
                        >
                          Download
                          <CloudArrowDownFill className="mx-1" />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </Row>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </Row>
      </Container>
    </>
  );
};
export default SearchOutput;
