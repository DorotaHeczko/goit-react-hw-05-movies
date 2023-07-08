import { getCast } from '../../api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Circles } from 'react-loader-spinner';
import { CastCard, ActorsList, BoxName } from './Cast.styled.jsx';

export const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cast = await getCast(Number(movieId));
        setActors(cast);
      } catch (error) {
        Notify.failure(
          'Ooops, something broke. Try again please... ',
          error.messages
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (!actors) {
    return null;
  }

  return (
    <ActorsList>
      {loading && (
        <Circles
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      )}
      {actors.cast.map(actor => {
        const posterPath = actor.profile_path
          ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
          : 'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg';

        return (
          <CastCard key={actor.id}>
            <img src={posterPath} width={200} height={300} alt={actor.name} />
            <BoxName>{actor.name}</BoxName>
          </CastCard>
        );
      })}
    </ActorsList>
  );
};
