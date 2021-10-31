import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://api.themoviedb.org/3/trending/all/day', {
  //       params: {
  //         api_key: 'cc4f4d6b8edecb3b07602887dd0f9f9f',
  //       },
  //     })
  //     .then(response => {
  //       setMovies(response.data.results);
  //       console.log(response.data.results);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  <>
    <Route path="/" component={HomePage} />
    <Route path="/movies" component={MoviesPage} />;
  </>;

  // return (
  //   movies && (
  //     <>
  //       <h1>Trending today</h1>
  //       <ol>
  //         {movies.map(el => {
  //           return (
  //             <li className="list-item_movies" key={el.id}>
  //               <Link
  //                 to={{
  //                   pathname: `/movies/${el.id}`,
  //                   // state: { from: location },
  //                 }}
  //               >
  //                 {el.title}
  //                 {el.name}
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ol>
  //     </>
  //   )
  // );
}

export default App;
