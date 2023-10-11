import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../Services/MoviesApi';
import  MoviesList  from './MoviesList';

export const MoviesTrendingList = () => {
  const [movies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (error) {
      return;
    }

    try {
      getTrendingMovies()
        .then(result => {
          return result;
        })
        .then(data => {
          setError(null);
          setTrendingMovies([...data.data.results]);
        })
        .catch(error => {
          setError(null);
        });
    } catch (error) {
      setError(null);
    }
  }, [error]);

  if (error) {
    return <div>Something went wrong. Check your network connection...</div>;
  }
  else {
    return <MoviesList array={movies} />
  };
};
