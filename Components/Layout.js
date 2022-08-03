import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import styles from "../styles/Home.module.css";
import {
  ArrowRight,
  HouseFill,
  SearchHeartFill,
  CameraVideoFill,
} from "react-bootstrap-icons";
import Spinner from "react-bootstrap/Spinner";
import TypeWriter from "./TypeWriter";
import Preloader from "./Preloader";
import Navbar from "./Navbar";

const Layout = ({ path, Content }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("post sent");
    setIsLoading(true);
    try {
      const response = await axios.post(path, { data: query });
      setIsLoading(false);
      setData(response.data);
      setError({});
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data);
    }
  };
  console.log(data);

  return (
    <>
      <Container fluid="md font">
        <Row className={styles.main}>
          <Col className="mb-4" lg={9}>
            {" "}
            <Row>
              <Navbar Video={CameraVideoFill} House={HouseFill} />
            </Row>
            <Row className="progressBar"></Row>
            <Row className="bold">
              <TypeWriter />
            </Row>
            <Row>
              {" "}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                  <SearchHeartFill
                    style={{ color: "green" }}
                    className="bold "
                  />{" "}
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    className={styles.input}
                  />
                  <Button type="submit" variant="success">
                    {isLoading ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      <ArrowRight className="bold" />
                    )}
                  </Button>
                </div>
                {Object.keys(error).length ? (
                  <div className="errmsg mt-2 animate">{error.message}</div>
                ) : (
                  <div></div>
                )}
              </form>
            </Row>
            <Preloader load={isLoading} />
            {/* <Row className="mt-4">
              {data ? <Content styles={styles} data={data} /> : <div></div>}
            </Row> */}
            <Row>
              <Content data={data} />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
