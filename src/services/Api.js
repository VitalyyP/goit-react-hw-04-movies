const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = 'cc4f4d6b8edecb3b07602887dd0f9f9f';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

function FetchApi() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`).then(response =>
    response.json(),
  );
}

function FetchSearchMovies(query) {
  return fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${KEY_API}`).then(response =>
    response.json(),
  );
}

export function FetchMovieDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${id}?api_key=${KEY_API}`);
}

function FetchMoviesCast(id) {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}`).then(response =>
    response.json(),
  );
}

function FetchMoviesReviews(id) {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}`).then(response =>
    response.json(),
  );
}

// export { FetchApi, FetchMoviesDetail, FetchMoviesCast, FetchMoviesReviews, FetchSearchMovies };
