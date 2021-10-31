import { useState, useEffect } from 'react';
import { FetchMovieDetails } from '../../services/Api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MoviesPage from '../MoviesPage';
import s from './MovieDetailsPage.module.css';

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const movieId = match.params.url;

  useEffect(() => {
    // axios
    //   .get(`${BASE_URL}/movie/${movieId}`, {
    //     params: {
    //       api_key: 'cc4f4d6b8edecb3b07602887dd0f9f9f',
    //     },
    //   })
    //   .then(response => {
    //     setMovie(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    FetchMovieDetails(movieId).then(data => {
      setMovie(data);
    });

    return () => {};
  }, [movieId]);

  console.log(movie);
  console.log(movie.genres);
  // const { id } = this.props.match.params;
  return (
    <>
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <h1>
        {movie.title} ({movie.release_date})
      </h1>
      <p>User score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      {/* <ul className={s.list}>
        {movie.genres.map(i => {
          return (
            <li className={s.item} key={i.id}>
              {i.name}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default MovieDetailsPage;
