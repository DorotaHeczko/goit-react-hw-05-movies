import PropTypes from 'prop-types';
import {
  BoxCard,
  MovieDescr,
  BoxTitle,
  MovieRating,
  FilmOverview,
  FilmText,
  MovieGenreList,
  MovieText,
  MovieBox,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { overview, title, release_date, genres, vote_average, poster_path } =
    movie;

  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://cdn.create.vista.com/api/media/small/324908572/stock-vector-3d-cinema-film-strip-in';

  return (
    <MovieBox>
      <BoxCard src={posterPath} alt={title} />
      <MovieDescr>
        <BoxTitle>
          "{title}"({new Date(release_date).getFullYear()})
        </BoxTitle>
        <MovieRating>User Score: {Math.round(vote_average * 10)}%</MovieRating>
        <FilmOverview>Overview</FilmOverview>
        <FilmText>{overview}</FilmText>
        <MovieGenreList>Genres</MovieGenreList>
        <MovieText>{genres.map(genre => genre.name).join(', ')}</MovieText>
      </MovieDescr>
    </MovieBox>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
