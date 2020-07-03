import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieImg = styled.img`
  border: 1px solid green;
  object-fit: cover;
`;

const MovieGenre = styled.p`
  border-left: 1px solid green;
  padding: 0 3%;
  background-color: gainsboro;
  color: #131d15;
  text-shadow: 1px 1px #847a83;
`;

const MovieTitle = styled.h4`
  text-align: center;
  font-size: 28px;
  padding-top: 2%;
`;

export default function Movie({ movie, genres }) {
  const { poster_path, title, genre_ids } = movie;
  const posterPath = 'https://image.tmdb.org/t/p/';
  const posterSize = 'w200';

  const filterGenres = (list) =>
    genres
      .filter(({ id }) => list.includes(id))
      .map(({ name }) => <MovieGenre key={name}>{name}</MovieGenre>);

  return (
    <>
      <ImgContainer>
        <MovieImg
          src={`${posterPath}${posterSize}${poster_path}`}
          alt="movie poster"
        />
      </ImgContainer>
      <MovieTitle>{title}</MovieTitle>
      {filterGenres(genre_ids)}
    </>
  );
}
