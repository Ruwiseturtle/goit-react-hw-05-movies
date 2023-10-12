import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../Services/MoviesApi';
import  MoviesList  from './MoviesList';

export const MoviesTrendingList = () => {
  const [movies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    console.log('movies');
    console.log(movies);
  }, [movies]);

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
          console.log('fetch trending');
          setError(null);
        });
    } catch (error) {
      console.log('catch trending');
      setError(null);
    }
  }, [error]);

  if (error) {
    return <div>Something went wrong. Check your network connection...</div>;
  }
  else {
    return (
      <div>
        <MoviesList array={movies} />        
      </div>
    );  };
};
