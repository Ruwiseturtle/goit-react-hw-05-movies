
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState, Suspense } from 'react';
import { getMoviesBySearch } from '../Services/MoviesApi';
import MoviesList from './MoviesList';
import { useDebounce } from 'usehooks-ts';

const MoviesListBySearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams({});
    const movieName = searchParams.get('movieName') ?? '';
  const debouncedValue = useDebounce(movieName, 1000);
 
  useEffect(() => {
    if (debouncedValue !== movieName){return}
      //робимо запрос на бекенд тільки тоді, коли спрацьовує debound, щоб при кожному onchange
      //не було запитів, бо на бекенді можуть заблокувати
      try {
        getMoviesBySearch(movieName)
          .then(result => {
            return result;
          })
          .then(data => {
            setMovies([...data.data.results]);
          })
          .catch(error => {});
      } catch (error) {}
  }, [movieName, debouncedValue]);   
 
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
