import React from 'react';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet} from 'react-router-dom';
import { getReviewsById } from '../Services/MoviesApi';

const Reviews = () => {
    const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
   
    useEffect(() => {
      try {
        getReviewsById(movieId)
          .then(result => {
            return result;
          })
          .then(data => {
            setReviews(data.data.results);
          })

          .catch(error => {
            setReviews('помилка');
          });
      } catch (error) {}
    }, [movieId]);


  return (
    <div>
      {reviews && (
        <ul>
          {reviews?.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && (
        <div>There is no information available for this film...</div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Reviews
