import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header({ House, Video }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid="md">
          <Image
            src="/images/fld.jpg"
            alt="Fl⚡️shLoad"
            width={100}
            height={30}
          />
          {/* <div className="appName  me-3">Fl⚡️shLoad</div> */}
          <Nav className="me-auto ">
            <Link passHref href="/">
              <a className="mx-3">
                <House className="bold mx-1" />
                Home
              </a>
            </Link>
            <Link  passHref href="/watch/videos">
              <a className="mx-3">
                <Video  className="bold mx-1" />
                Videos
              </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
