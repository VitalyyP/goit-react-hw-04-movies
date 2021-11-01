import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Navigation from './components/Navigation';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/movies/:url"
          render={props => {
            return <MovieDetailsPage {...props} />;
          }}
        />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
