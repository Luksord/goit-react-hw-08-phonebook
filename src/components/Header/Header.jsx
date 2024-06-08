import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
