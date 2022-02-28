import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Landing from "../components/Landing";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Container>
      {loggedIn ? (
        <Dashboard setLoggedIn={setLoggedIn} />
      ) : (
        <Landing setLoggedIn={setLoggedIn} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
