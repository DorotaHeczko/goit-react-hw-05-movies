import { useState, useEffect } from 'react';
import { searchMovies } from 'api/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
  MoviesContainer,
  MoviesInput,
  FilmList,
  MoviesSearchBtn,
  MovieTitle,
  MovieLink,
} from '../Pages.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const inputParam = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!inputParam) {
      return;
    }
    async function fetch() {
      try {
        const { results } = await searchMovies(inputParam);
        if (results.length < 1) {
          Notiflix.Notify.warning("We can't find it, try again");
        }
        setMovies(results);
      } catch (error) {
        Notiflix.Notify.warning('Something wrong, try again please');
      }
    }
    fetch();
  }, [inputParam]);

 const onSubmit = e => {
   if (!input) {
     Notiflix.Notify.warning('Please fill in the gap');
     return;
   }

   e.preventDefault();
   setSearchParams(input !== '' ? { filter: input } : {});
   setInput('');
 };


  const onChangeInput = value => {
    setInput(value);
  };

  if (!movies) {
    return null;
  }

  return (
    <>
      <MoviesContainer onSubmit={onSubmit}>
        <MoviesInput
          type="text"
          value={input}
          name="input"
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <MoviesSearchBtn type="submit">Search</MoviesSearchBtn>
      </MoviesContainer>
      {movies && (
        <FilmList>
          {movies.map(movie => {
            let posterPath;
            if (movie.poster_path) {
              posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
            } else {
              posterPath =
                'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
            }
            return (
              <MovieLink
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
              >
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
