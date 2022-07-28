import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import { CloudArrowDown } from "react-bootstrap-icons";
import axios from "axios";
//https://i.ytimg.com/vi/bnVUHWCynig/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDdVYpBllucka8OdmI4rYaxdDbwZQ
//https://i.ytimg.com/vi/KAWxOxJGG54/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBxq4cI_iP6xhoJg5Oi-ZidqElJEA
import React from "react";
import useDownloader from "react-use-downloader";
const VideoInfo = ({ data }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const VideoImage = () => {
    return (
      <Image
        loader={myLoader}
        src={data.image.url}
        alt={data.title}
        width={500}
        height={500}
      />
    );
  };
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const handleDownload = (url, format, size) => {
    const fileUrl = `http://localhost:3000/api/video?url=https://www.youtube.com/watch?v=bnVUHWCynig&tag=18`;
    const filename = "nam.mp4";
    download(fileUrl, filename);
    // axios.get(`/api/video?url=${url}&tag=${format}`);
    //window.location.href = `http://localhost:3000/api/video?url=${url}&tag=${format}&name=${data.title}&size=${size}`;
    console.log("sent");
  };
  return (
    <div className="px-3">
      {" "}
      <Col>
        <VideoImage />
      </Col>
      <hr style={{ fontSize: 50 }} />
      <Row className="boderContainer bold ">{data.title.toUpperCase()}</Row>
      <Row>
        <Row className="center">VIDEO</Row>
        <hr />
        <Col>Resolution</Col>

        <Col>Type </Col>
        <Col>Download</Col>
        <hr />
        {data.format.map((item) => (
          <Row key={item.url} className="mt-2">
            <Col>{item.qualityLabel}</Col>
            <Col>{item.container}</Col>

            <Col>
              <Button
                onClick={() => {
                  handleDownload(data.url, item.itag), item.contentLength;
                }}
                variant="success"
                size="sm"
              >
                <Col>{Math.ceil(item.contentLength / 1048576)} MB</Col>
                <CloudArrowDown />
              </Button>
            </Col>
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default VideoInfo;
