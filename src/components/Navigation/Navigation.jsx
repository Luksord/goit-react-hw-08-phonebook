import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav_container}>
      <NavLink className={css.nav_link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav_link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
