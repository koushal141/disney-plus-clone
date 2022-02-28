import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Poster from "./Poster";

function Dashboard({ setLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} setLoggedIn={setLoggedIn} />
      <Poster setIsOpen={setIsOpen} />
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
