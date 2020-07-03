import React, { useState, useEffect } from 'react';
import { getPopularMovies } from '../utils/api';
import styled from 'styled-components';
import Movie from './Movie';

const Container = styled.div``;

const TitlePage = styled.h3`
  text-align: center;
`;

const ListMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const MovieCard = styled.div`
  width: 15%; 
  border: 1px solid green;
  border-top: 20px solid #38ce71;
  margin 1% 0;
  @media (max-width: 1410px) {
    width: 22%;
  }
  @media (max-width: 950px) {
    width: 32%;
  }
  @media (max-width: 650px) {
    width: 52%;
  }
`;

const MovieDescription = styled.p`
  text-align: justify;
  padding: 0 3%;
`;

export default function TopMovies({ genres }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies(setMovies);
  }, []);

  const limitDescription = (description) => {
    return description.substr(0, 120) + '...';
  };

  return (
    <Container>
      <div>
        <TitlePage>Our Top 10</TitlePage>
      </div>
      {movies.length > 0 ? (
        <ListMovies>
          {movies.slice(0, 10).map((movie) => (
            <MovieCard key={movie.id}>
              <Movie movie={movie} genres={genres} />
              <MovieDescription>
                {limitDescription(movie.overview)}
              </MovieDescription>
            </MovieCard>
          ))}
        </ListMovies>
      ) : (
        <p>No movies found in the database.</p>
      )}
    </Container>
  );
}
