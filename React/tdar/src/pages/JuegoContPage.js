import React from "react";
import { Container } from "react-bootstrap";
import JuegoCont from "../components/juegocontaminacion/JuegoCont";
import "./JuegoContPage.css";
import NavMenu from "../components/NavMenu";

const JuegoContPage = () => {
  return (
    <div className="bg-dark contPage">
      <Container>
        <NavMenu/>
        <JuegoCont />
      </Container>
    </div>
  );
};

export default JuegoContPage;
