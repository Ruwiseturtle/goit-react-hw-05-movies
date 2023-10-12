import { SearchInput } from "components/SearchInput";
import MoviesListBySearch  from "../components/GetMoviesBySearch";
import React, {Suspense } from 'react';

const MoviesPage = () => {
 
  return (
    <main>
      <SearchInput />
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesListBySearch />
      </Suspense>
    </main>
  );
};

export default MoviesPage;