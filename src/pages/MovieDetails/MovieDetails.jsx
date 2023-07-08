import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from 'api/Api';

import {
  ExtendedMovieDetails,
  ExtraMovieTitle,
  NavItem,
  LinkButtonStyle,
  LinkBox,
} from '../Pages.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <>
        <LinkBox>
          {' '}
          <LinkButtonStyle to={backLinkHref}>
            Back to all movies
          </LinkButtonStyle>
        </LinkBox>
        {error && <div>Something wrong</div>}
        {movie && (
          <>
            <MovieCard movie={movie} />
            <ExtendedMovieDetails>
              <ExtraMovieTitle>Additiona information</ExtraMovieTitle>
              <NavItem to={'cast'} state={location.state}>
                Cast
              </NavItem>
              <NavItem to={'reviews'} state={location.state}>
                Reviews
              </NavItem>
            </ExtendedMovieDetails>
          </>
        )}
      </>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
