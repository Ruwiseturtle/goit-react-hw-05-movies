import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const CastList = lazy(() => import('./CastList'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
