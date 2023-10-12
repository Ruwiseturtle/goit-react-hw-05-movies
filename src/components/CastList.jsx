import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getCastById } from '../Services/MoviesApi';
import css from './CastList.module.css';

const CastList = () => {
    const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
      
      useEffect(() => {
        try {
          getCastById(movieId)
            .then(result => {
              return result;
            })
            .then(data => setCasts(data.data.cast))
            .catch(error => {
              console.log('помилка!!!!!!!!!!!');
            });
        } catch (error) {
          console.log('catch');
        }
      }, [movieId]);
    
  return (
    <div>
      {casts && (
        <ul className={css.list}>
          {casts?.map(cast => (
            <li key={cast.cast_id}>
              {cast.profile_path && (
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt={cast.name}
                ></img>
              )}
              <p className={css.textName}>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
      {casts.length === 0 && (
        <div>There is no information available for this film...</div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CastList;
