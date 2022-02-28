import React from "react";
import styled from "styled-components";
import Themes, { Button } from "../../Utils/Themes";
import { BsPlay } from "react-icons/bs";
import Header from "./Header";
import Library from "./Library";

function Poster({ setIsOpen }) {
  return (
    <Container>
      <Header setIsOpen={setIsOpen} />
      <PosterBG>
        <TopGradient />
        <BottomGradient />
      </PosterBG>
      <Details>
        <Movie>
          <Title>The Lion King</Title>
          <Meta>2019, 180 min</Meta>
        </Movie>
        <Options>
          <Button>
            <BsPlay fontSize="1.6rem" />
            Play
          </Button>
          <Button bg={Themes.colors.gray}>Trailer</Button>
        </Options>
        <Desc>
          A grown-up Simba rescues Timon and Pumbaa from a hungry lioness, who
          turns out to be Nala. She and Simba reunite and fall in love, and she
          urges him to return home, telling him that the Pride Lands have become
          a drought-stricken wasteland under {"Scar's"} reign.
        </Desc>
      </Details>
      <Companies>
        <Company>
          <BrandLogo src="/images/viewers-disney.png" />
          <BrandVideo autoPlay loop playsInline muted>
            <source src="/videos/disney.mp4" type="video/mp4" />
          </BrandVideo>
        </Company>
        <Company>
          <BrandLogo src="/images/viewers-pixar.png" />
          <BrandVideo autoPlay loop playsInline muted>
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </BrandVideo>
        </Company>
        <Company>
          <BrandLogo src="/images/viewers-marvel.png" />
          <BrandVideo autoPlay loop playsInline muted>
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </BrandVideo>
        </Company>
        <Company>
          <BrandLogo src="/images/viewers-starwars.png" />
          <BrandVideo autoPlay loop playsInline muted>
            <source src="/videos/starwars.mp4" type="video/mp4" />
          </BrandVideo>
        </Company>
        <Company>
          <BrandLogo src="/images/viewers-national.png" />
          <BrandVideo autoPlay loop playsInline muted>
            <source src="/videos/national.mp4" type="video/mp4" />
          </BrandVideo>
        </Company>
      </Companies>
      <Library />
    </Container>
  );
}

export default Poster;

const Container = styled.div`
  background: rgba(2, 0, 36, 1);
  width: 100%;
  position: relative;
`;

const PosterBG = styled.div`
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  background: url("/images/LionKing.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-top: 40vh;
  padding: 0 2rem;
  max-width: 50vw;

  @media (max-width: 786px) {
    max-width: 100%;
  }
`;

const Movie = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 25;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
`;

const Meta = styled.p`
  color: gray;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Desc = styled.p`
  color: gray;
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 25;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  z-index: 25;
`;

const Companies = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  z-index: 250;
  overflow: hidden;

  @media (max-width: 786px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Company = styled.div`
  border-radius: 12px;
  display: flex;
  padding: 28% 0;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.3s all;
  background: linear-gradient(180deg, #393b49 0%, #242632 100%);
  border: 2px solid #4e515c;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 250;

  &:hover {
    transform: scale(1.05);
    border: 3px solid #fff;

    video {
      display: block;
    }
  }
`;

const BrandLogo = styled.img`
  z-index: 20;
  position: absolute;
  width: 100%;
  inset: 0;
  object-fit: cover;
`;

const BrandVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  display: none;
  object-fit: cover;
`;

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20vh;
  opacity: 0.8;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15vh;
  z-index: 2;

  background: linear-gradient(
    360deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
