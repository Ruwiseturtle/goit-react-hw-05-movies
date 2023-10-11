import { MoviesTrendingList }  from "../components/GetTrendingMovies";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
   
    return (
      <main>
        <h1>Trending today</h1>
        <MoviesTrendingList />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    );
}

export default Home;