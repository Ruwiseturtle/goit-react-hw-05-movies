import { SearchInput } from "components/SearchInput";
import MoviesListBySearch  from "../components/GetMoviesBySearch";

const MoviesPage = () => {
 
  return (
    <main>
      <SearchInput/>
      <MoviesListBySearch/>
    </main>
  );
};

export default MoviesPage;