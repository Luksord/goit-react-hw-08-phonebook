import { Helmet } from 'react-helmet-async';
import css from './Home.module.css';

const Home = () => {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.subcontainer}>
        <h2 className={css.title}>Welcome!!</h2>
        <p className={css.text}>
          To your personal online phonebook. If you wish to start please sign-up
          in the 'Register' tab.
        </p>
        <p className={css.text}>
          After registration you will be able to start adding contacts to your
          phonebook in the 'Contacts' tab
        </p>
      </div>
    </main>
  );
};

export default Home;
