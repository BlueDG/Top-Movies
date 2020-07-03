import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopMovies from '../components/TopMovies';
import OtherMovies from '../components/OtherMovies';
import { getGenres } from '../utils/api';

const Header = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 2%;
  margin: 0.5% 1% 1%;
  background-color: #38ce71;
`;

const HeaderTitle = styled.h1`
  background-color: #38ce71;
  color: #131d15;
`;

const HeaderSubTitle = styled.h2`
  background-color: #38ce71;
  color: #131d15;
`;

export default function Home() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenres(setGenres);
  }, []);

  return (
    <>
      <Header>
        <HeaderTitle>Welcome.</HeaderTitle>
        <HeaderSubTitle>Check the TMDB's most popular movies.</HeaderSubTitle>
      </Header>
      <TopMovies genres={genres} />
      <OtherMovies genres={genres} />
    </>
  );
}
