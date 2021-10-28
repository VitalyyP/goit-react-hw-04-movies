import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  console.log('test');

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/550?api_key=cc4f4d6b8edecb3b07602887dd0f9f9f')
      // .get('https://api.themoviedb.org/3/movie/550?', {
      //   headers: {
      //     Authorization: 'cc4f4d6b8edecb3b07602887dd0f9f9f',
      //   },
      // })
      .then(response => {
        console.log(response);
        // console.log(response.data.original_title);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
