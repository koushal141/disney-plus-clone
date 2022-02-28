import React from "react";
import styled from "styled-components";
import MovieTile from "./MovieTile";

function CategoryLib({ title, data }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Tiles>
        {data.map((movie) => (
          <MovieTile key={movie.title} movie={movie} />
        ))}
      </Tiles>
    </Container>
  );
}

export default CategoryLib;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 0 2rem;
`;

const Title = styled.h4`
  color: #fff;
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
