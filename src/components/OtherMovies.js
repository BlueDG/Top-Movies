import React, { useState, useEffect } from 'react';
import { getOtherMovies } from '../utils/api';
import Movie from './Movie';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitlePage = styled.h3`
  text-align: center;
`;

const SliderContainer = styled.div`
  border: 1px solid green;
  border-top: 20px solid #38ce71;
  width: 25%;
  text-align: center;
  margin-bottom: 1%;
  @media (max-width: 805px) {
    width: 52%;
  }
`;

const MovieSlide = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 25%;
  margin: 2% 0;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 2%;
  background-color: #14422e;
  outline: 0;
  border: 1px solid #89a08d;
  color: whitesmoke;
  text-shadow: 1px 1px #847a83;
  &:focus {
    outline: none;
  }
  &:disabled {
    display: none;
  }
`;

const settings = {
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: true,
};

export default function OtherMovies({ genres }) {
  const [movies, setOtherMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getOtherMovies(setOtherMovies, page);
  }, [page]);

  return (
    <Container>
      <div>
        <TitlePage>More popular movies.</TitlePage>
      </div>
      {movies.length > 0 ? (
        <>
          <SliderContainer>
            <Slider {...settings}>
              {movies.slice(11, 20).map((movie) => (
                <MovieSlide key={movie.id}>
                  <Movie movie={movie} genres={genres} />
                </MovieSlide>
              ))}
            </Slider>
          </SliderContainer>
          <ButtonContainer>
            <Button disabled={page === 1} onClick={() => setPage((x) => x - 1)}>
              Previous
            </Button>
            <Button onClick={() => setPage((x) => x + 1)}>Next</Button>
          </ButtonContainer>
        </>
      ) : (
        <p>No movies found in the database.</p>
      )}
    </Container>
  );
}
