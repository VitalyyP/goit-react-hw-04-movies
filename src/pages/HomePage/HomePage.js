import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchApi } from '../../services/Api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    FetchApi().then(response => {
      setMovies(response.results);
    });
  }, []);

  return (
    movies && (
      <>
        <h1>Trending today</h1>
        <ol>
          {movies.map(el => {
            return (
              <li className="list-item_movies" key={el.id}>
                <Link
                  to={{
                    pathname: `/movies/${el.id}`,
                  }}
                >
                  {el.title}
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ol>
      </>
    )
  );
};

export default HomePage;
