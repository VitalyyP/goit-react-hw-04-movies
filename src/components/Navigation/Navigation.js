import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink exact to="/" className={s.NavLink} activeClassName="NavLink--active">
          Home
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/movies" className={s.NavLink} activeClassName="NavLink--active">
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
