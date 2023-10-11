import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3af5d52e1c45bc82f847627d42b14ae7';

//список найпопулярніших фільмів
export async function getTrendingMovies() {
    const url = BASE_URL + 'trending/movie/day?api_key=' + API_KEY;
    const data = await axios.get(url);
    return data;
};

//запит повної інформації про фільм для сторінки кінофільму
export async function getMoviesById(id) {
  const url = BASE_URL + 'movie/' + id+'?api_key=' + API_KEY;
  const data = await axios.get(url);
  return data;
};

//запит інформації по id про акторський склад для сторінки кінофільму
export async function getCastById(id) {
  const url = BASE_URL + 'movie/' + id + '/credits?api_key=' + API_KEY;
  const data = await axios.get(url);
  return data;
};


//запит оглядів для сторінки кінофільму
export async function getReviewsById(id) {
  const url = BASE_URL + 'movie/' + id + '/reviews?api_key=' + API_KEY;
  const data = await axios.get(url);
  return data;
};

//пошук фільму за ключовим словом
export async function getMoviesBySearch(searchWord) {
  const url = BASE_URL + 'search/movie?api_key=' + API_KEY +
             '&query=' + searchWord + '&include_adult=false';
  const data = await axios.get(url);
  return data;
};

