import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";

const DownloadOutput = () => {
  return (
    <Container className="dwnldoutpt mt-2">
      <Row>
        <Col>
          hfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnjjjjjjjjjjjjjj
        </Col>
        <hr />
      </Row>
      <Row>
        {" "}
        <Col></Col>
        <Col>Video</Col>
        <Col></Col>
        <hr />
      </Row>
      <Row>
        <Col>mp4</Col>{" "}
        <Col>
          <Col>360 p</Col>
        </Col>
        <Col>
          <Col>
            <Badge className="mb-2" size="sm" bg="success">
              200 MB <Download />
            </Badge>
          </Col>
        </Col>
        <hr />
      </Row>
      <Row>
        <Col></Col>
        <Col>Audio</Col>
        <Col></Col>
      </Row>

      <Row>
        <hr />
        <Col>Mp3</Col>
        <Col></Col>
        <Col>
          {" "}
          <Badge size="sm" bg="success">
            200 MB <Download />
          </Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadOutput;
