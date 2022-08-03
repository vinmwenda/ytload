import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import { CloudArrowDown } from "react-bootstrap-icons";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { Download } from "./Download";
const VideoInfo = ({ data, styles }) => {
  const [isChoosen, setIsChoosen] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  const radios = [
    { name: "VIDEOS", value: true, variant: "outline-success" },
    { name: "AUDIO", value: false, variant: "outline-danger" },
  ];
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
  const ToggleFormatBtn = () => {
    return (
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={radio.variant}
            name="radio"
            value={radio.value}
            checked={isChoosen === radio.value}
            onChange={(e) => setIsChoosen(radio.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  };
  const VideoFormatsInfo = ({ formats }) => {
    return (
      <Row className="px-4 choosen">
        <hr />
        <Row></Row>
        <Col>Resolution</Col>

        <Col>Type </Col>
        <Col>Download</Col>
        <hr />

        {formats.map((f) => (
          <Row key={f.url} className="mt-2 ">
            <Col>{f.qualityLabel}</Col>
            <Col>{f.container}</Col>
            <Col>
              <Button
                onClick={() => {
                  handleDownload(
                    data.url,
                    f.itag,
                    f.contentLength,
                    f.container
                  );
                }}
                variant="success"
                size="sm"
              >
                <Col>{Math.ceil(f.contentLength / 1048576)} MB</Col>
                <CloudArrowDown />
              </Button>
            </Col>
          </Row>
        ))}
      </Row>
    );
  };

  const AudioFormatsInfo = ({ format }) => {
    format = format[0];
    return (
      <Row className="px-4">
        {" "}
        <hr />
        <Col>Type </Col>
        <Col>Download</Col>
        <hr />{" "}
        <Row className="mt-2 ">
          <Col>Mp3</Col>

          <Col>
            <Button
              onClick={() => {
                handleDownload(
                  data.url,
                  format.itag,
                  format.contentLength,
                  "mp3"
                );
              }}
              variant="success"
              size="sm"
            >
              <Col>{Math.ceil(format.contentLength / 1048576)} MB</Col>
              <CloudArrowDown />
            </Button>
          </Col>
        </Row>
      </Row>
    );
  };

  const handleDownload = (url, format, size, type) => {
    window.location.href = `http://localhost:3000/api/video?url=${url}&tag=${format}&name=${data.title}&size=${size}&type=${type}`;

    console.log("sent");
  };
  console.log(isDownloading);

  return (
    <Container className="px-3">
      <Download styles={styles} show={isDownloading} />
      <Col>
        <VideoImage />
      </Col>
      <hr />
      <Row className="boderContainer bold ">{data.title.toUpperCase()}</Row>
      <Row>
        <ToggleFormatBtn />
      </Row>
      {isChoosen ? (
        <VideoFormatsInfo formats={data.videoFormats} />
      ) : (
        <AudioFormatsInfo
          format={data.audioFormat.filter(
            (x) => x.audioQuality === "AUDIO_QUALITY_MEDIUM"
          )}
        />
      )}
    </Container>
  );
};
export default VideoInfo;
