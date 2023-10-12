
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState, Suspense } from 'react';
import { getMoviesBySearch } from '../Services/MoviesApi';
import MoviesList from './MoviesList';

const MoviesListBySearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams({});
    const movieName = searchParams.get('movieName') ?? '';
    
    useEffect(() => {
      if (movieName.trim() === '') {
        return;
      }
     
      //робимо запрос на бекенд
         try {
           getMoviesBySearch(movieName)
             .then(result => {
               return result;
             })
             .then(data => {
               setMovies([...data.data.results]);
             })
             .catch(error => {
             });
         } catch (error) {
         }
       
    }, [movieName]);   
 
    //ф-ція витягує з бекенду фільми,в назві яких є слово з input
   

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList array={movies} />
      </Suspense>
    </div>
  );
};

export default MoviesListBySearch
