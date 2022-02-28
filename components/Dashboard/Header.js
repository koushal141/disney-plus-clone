import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Themes from "../../Utils/Themes";

function Header() {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => setScroll(window.scrollY);

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container scroll={scroll}>
      <Logo src="/images/logo.svg" alt="logo" />
      <Studios>
        <Studio active>
          <Bar />
          <StudioImage src="/images/favicon.svg" />
        </Studio>
        <Studio>
          <Bar />
          <StudioImage src="/images/head-pixar.png" />
        </Studio>
        <Studio>
          <Bar />
          <StudioImage src="/images/head-marvel.png" />
        </Studio>
        <Studio>
          <Bar />
        </Studio>
        <Studio>
          <Bar />
        </Studio>
      </Studios>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 500;
  transition: ease-in-out 0.25s all;
  background: ${(p) => (p.scroll > 15 ? "rgba(0, 0, 0, 0.2)" : "transparent")};
  backdrop-filter: ${(p) =>
    p.scroll > 15 ? "saturate(180%) blur(10px)" : "none"};
`;

const Studios = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1.25rem;
`;
const Logo = styled.img`
  width: 120px;
`;

const Studio = styled.div`
  width: 50px;
  height: 25px;
  background-color: #fff;
  border-radius: 18px;
  border: ${(p) => (p.active ? `3px solid ${Themes.colors.blue}` : "none")};
  transform: ${(p) => (p.active ? `scale(1.2)` : "none")};
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  span {
    display: ${(p) => (p.active ? `block` : "none")};
  }
`;

const Bar = styled.span`
  position: absolute;
  bottom: -10px;
  height: 2.5px;
  width: 20px;
  background: ${Themes.colors.blue};
  border-radius: 18px;
`;

const StudioImage = styled.img`
  position: absolute;
  height: 100%;
  object-fit: stretch;
`;
