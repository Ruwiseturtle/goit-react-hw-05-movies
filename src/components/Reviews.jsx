import  { useEffect, useState, Suspense } from 'react';
import React from 'react';
import { useParams} from 'react-router-dom';
import { getReviewsById } from '../Services/MoviesApi';

const Reviews = () => {
    const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [fetched, setFeched] = useState(false);
   
    useEffect(() => {
      try {
        getReviewsById(movieId)
          .then(result => {
            return result;
          })
          .then(data => {
            setReviews(data.data.results);
            setFeched(true);
          })

          .catch(error => {
            setReviews('помилка');
          });
      } catch (error) {}
    }, [movieId]);


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {fetched && (
          <ul>
            {reviews?.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        {fetched && reviews.length === 0 && (
          <div>There is no information available for this film...</div>
        )}
      </Suspense>
    </div>
  );
}

export default Reviews
