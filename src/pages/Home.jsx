import { MoviesTrendingList }  from "../components/GetTrendingMovies";
import { Suspense } from 'react';

const Home = () => {
   
    return (
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>Trending today</h1>
          <MoviesTrendingList />
        </Suspense>
      </main>
    );
}

export default Home;