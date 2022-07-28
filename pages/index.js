import Head from "next/head";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import TypeWriter from "../Components/TypeWriter";
import VideoInfo from "../Components/VideoInfo";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/video", { data: link });
    setData(response.data);
  };
  console.log(data);
  return (
    <>
      <Head>
        <title>YOUTUBE Downloader</title>
        <meta name="description" content="Youtube Downloader" />
      </Head>

      <Container fluid="md font">
        https://www.youtube.com/watch?v=bnVUHWCynig
        <Row className={styles.main}>
          {" "}
          <Col className="mb-4" lg={6}>
            <Row>
              <Navbar />
            </Row>
            <Row className="bold">
              <TypeWriter />
            </Row>
            <Row>
              {" "}
              <form
                className={styles.inputContainer}
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  value={link}
                  onChange={(e) => setLink(e.target.value.slice(-11))}
                  type="text"
                  className={styles.input}
                />
                <Link href="/video/video">
                  <a> </a>
                </Link>
                <Button type="submit" size="sm" variant="danger">
                  X
                </Button>
              </form>
            </Row>
            <Row className="mt-4">
              {data ? <VideoInfo data={data} /> : <div></div>}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
