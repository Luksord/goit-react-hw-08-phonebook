import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <h1 className={css.heading}>Phonebook</h1>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
