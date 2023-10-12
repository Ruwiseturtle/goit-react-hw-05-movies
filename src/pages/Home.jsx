import { MoviesTrendingList }  from "../components/GetTrendingMovies";
import { Suspense } from 'react';

const Home = () => {
   
    return (
      <main>
        <h1>Trending today</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MoviesTrendingList />
        </Suspense>
      </main>
    );
}

export default Home;