import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Home.scss";

function Home() {
  return (
    <header className="header">
      <Container>
        <Row className="d-flex justify-content-between">
         
          <Col xs="auto">
            <NavLink
              className="header__link"

              to="/photo"
            //   className={({ isActive }) =>
            //     "header__link" + (isActive ? " active" : "")
            //   }
            >
              Photos
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Home;
