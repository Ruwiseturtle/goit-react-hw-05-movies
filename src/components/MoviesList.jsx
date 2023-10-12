
import { Container } from './MoviesList.styled';
import { Link, useLocation} from 'react-router-dom';

const MoviesList = ({ array }) => {
  const location = useLocation();

  return (
    <Container>
      {array.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.name ?? movie.title}
            </Link>
          </li>
        );
      })}
         </Container>
  );
}

export default MoviesList
