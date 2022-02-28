import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Poster from "./Poster";

function Dashboard() {
  return (
    <Container>
      <Nav />
      <Poster />
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 100vw;
`;
