import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Landing from "../components/Landing";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
  return <Container>{loggedIn ? <Dashboard /> : <Landing />}</Container>;
}

const Container = styled.div`
  width: 100%;
`;
