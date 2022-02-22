import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs="auto">
            <NavLink className="header__link header__title" to="/">
              Home
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink
              className="header__link"

              to="/photo"
            //   className={({ isActive }) =>
            //     "header__link" + (isActive ? " active" : "")
            //   }
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
