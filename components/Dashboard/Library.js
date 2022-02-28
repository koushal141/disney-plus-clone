import React from "react";
import styled from "styled-components";
import lib from "../../data/DisneyData.json";
import CategoryLib from "./CategoryLib";

function Library() {
  const { movies } = lib;
  const Movies = Object.values(movies);
  const Trending = Movies.filter((fil) => fil.type == "trending");
  const newMovies = Movies.filter((fil) => fil.type == "new");
  const recommend = Movies.filter((fil) => fil.type == "recommend");
  const original = Movies.filter((fil) => fil.type == "original");
  return (
    <Wrapper>
      <CategoryLib title="Trending" data={Trending} />
      <CategoryLib title="New" data={newMovies} />
      <CategoryLib title="Recommended" data={recommend} />
      <CategoryLib title="Originals" data={original} />
    </Wrapper>
  );
}

export default Library;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-bottom: 2rem;
`;
