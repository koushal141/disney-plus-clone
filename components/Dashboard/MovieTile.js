import React from "react";
import styled from "styled-components";
import Link from "next/link";

function MovieTile({ movie }) {
  return (
    <Wrapper>
      <Link href="/">
        <Image src={movie.cardImg} alt="" />
      </Link>
    </Wrapper>
  );
}

export default MovieTile;

const Wrapper = styled.div`
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
  z-index: 200;
  &:hover {
    transform: scale(1.05);
    border: 3px solid #fff;
  }
`;
const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
`;
