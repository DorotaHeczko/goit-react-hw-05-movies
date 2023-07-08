import { trendingApi } from '../../api/Api';

import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import {
  FilmList,
  MovieLink,
  MovieTitle,
  TrendingTitle,
} from '../Pages.styled';

export const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await trendingApi();
        const { results } = response;
        if (results.length < 1) {
          Notiflix.Notify.warning(
            "We can't find any trending movies. Please try again."
          );
        } else {
          setTrendings(results);
        }
      } catch (error) {
        Notiflix.Notify.warning('Something went wrong. Please try again.');
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <TrendingTitle>Trending movies</TrendingTitle>
      {trendings.length > 0 && (
        <FilmList>
          {trendings.map(movie => {
            const posterPath = movie.poster_path
              ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
              : 'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';

            return (
              <MovieLink key={movie.id} to={`/movies/${movie.id}`}>
                <img src={posterPath} width="400" alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieLink>
            );
          })}
        </FilmList>
      )}
    </>
  );
};
