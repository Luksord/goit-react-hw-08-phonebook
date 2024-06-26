import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { selectIsLoading, selectError } from '../../redux/selectors/index';
import { Loader } from '../../components/Loader/Loader';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/operations/contacts';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {isLoading && !error && <Loader />}
      <div className={css.subcontainer}>
        <ContactForm />
      </div>
      <div className={css.subcontainer}>
        <Filter />
      </div>
      <ContactList error={error} />
    </main>
  );
};

export default Contacts;
