import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {isLoading && !error && <Loader />}
      <div className={css.appContainer}>
        <ContactForm />
        <Filter />
        <ContactList error={error} />
      </div>
    </main>
  );
};

export default Contacts;
