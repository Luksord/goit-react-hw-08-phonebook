import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.container}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
