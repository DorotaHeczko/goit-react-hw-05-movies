import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'api/Api';
import { ReviewsFailure } from './Reviews.styled';

export const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await getMovieReviews(Number(filmId));
      const { results } = response;
      setReviews(results);
    };

    getReviews();
  }, [filmId]);

  if (reviews.length === 0) {
    return <ReviewsFailure>Sorry, we don't have any reviews!</ReviewsFailure>;
  }

  return (
    <div>
      {reviews.map(review => (
        <div key={review.id}>
          <p>
            <b>Author:</b> {review.author}
          </p>
          <p>
            <b>Content:</b> {review.content}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};
