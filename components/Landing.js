import React from "react";
import styled from "styled-components";
import Head from "next/head";

function Landing({ setLoggedIn }) {
  return (
    <Container>
      <Head>
        <title>Disney Plus Clone</title>
      </Head>
      <Disneylogo src="/images/logo.svg" alt="" />
      <Content>
        <Logos src="/images/cta-logo-one.svg" alt="" />
        <Button onClick={() => setLoggedIn(true)}>Try Now</Button>
        <Desc>
          Start streaming all these with your 7-day promotional offer, then only
          $12.99/MONTH
        </Desc>
        <Logos src="/images/cta-logo-two.png" alt="" />
      </Content>
    </Container>
  );
}

export default Landing;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url("/images/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-position: center; */
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
  padding: 2rem;
  max-width: 640px;
  margin-bottom: 10vh;
`;

const Logos = styled.img`
  width: 100%;
`;

const Disneylogo = styled.img`
  width: 120px;
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 764px) {
    width: 80px;
  }
`;

const Button = styled.a`
  color: #fff;
  background: #1f80e0;
  width: 100%;
  padding: 1.25rem 0;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out 0.3s all;

  &:hover {
    background: #146bc0;
  }
`;

const Desc = styled.p`
  color: lightgray;
  text-align: center;
  line-height: 1.25;
`;
