import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations/contacts';
import css from './ContactList.module.css';

export const ContactList = ({ error, contact }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      {error && (
        <p className={css.error}>Failed to fetch data from the server</p>
      )}
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <div className={css.wrapper}>
              <p className={css.name}>{contact.name}</p>
              <p className={css.number}>{contact.number}</p>
            </div>
            <button
              className={css.button}
              type="button"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  error: PropTypes.string,
};
