import { Suspense } from 'react';
import { Container } from './MoviesList.styled';
import { Link, useLocation, Outlet} from 'react-router-dom';

const MoviesList = ({ array }) => {
  const location = useLocation();

  return (
    <Container>
      {array.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.name ?? movie.title}
            </Link>
          </li>
        );
      })}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default MoviesList
