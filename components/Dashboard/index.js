import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Poster from "./Poster";
import Head from "next/head";

function Dashboard({ setLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Head>
        <title>Dashboard- Disney Plus CLone</title>
      </Head>
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
