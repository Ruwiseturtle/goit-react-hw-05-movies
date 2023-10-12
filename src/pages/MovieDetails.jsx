import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { BackLink } from 'components/BackLink';
import { getMoviesById } from '../Services/MoviesApi';
import {
  MovieInformation,
  Image,
  Info,
  Container,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
   const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (error) {
      return;
    }
    try {
      getMoviesById(movieId)
        .then(result => {
          return result;
        })
        .then(data => {
          setError(null);
          setMovie(data.data);
          setDate(data.data.release_date.split('-', 1));
        })
        .catch(error => {
          setError(error.message);
          console.log('error message');
          console.log(error.message);
          // setError(error);
        });
    } catch (error) {
      setError(error.message);
      console.log('error message');
      console.log(error.message);
    }
  }, [movieId, error]);

  if (error) {
    return <div>Something went wrong. Check your network connection...</div>;
  } else {
    return (
      <main>
        <div>
          <BackLink to={backLinkHref}>{'<- Go Back'}</BackLink>
          {movie && (
            <MovieInformation>
              <div>
                {movie.poster_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  ></Image>
                )}
                <div></div>
              </div>
              <Info>
                <h2>{movie.title + ' (' + date[0] + ')'}</h2>
                <p>User score: {Math.ceil(movie.vote_average * 10)} % </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres?.map(genre => genre.name + ' ')}</p>
              </Info>
            </MovieInformation>
          )}
        </div>

        {movie && (
          <Container>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </Container>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
};

export default MovieDetails;
