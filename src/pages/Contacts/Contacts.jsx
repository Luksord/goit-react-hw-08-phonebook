import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {isLoading && !error && <Loader />}
      <div className={css.app_container}>
        <ContactForm />
        <Filter />
        <ContactList error={error} />
      </div>
    </div>
  );
};

export default Contacts;
