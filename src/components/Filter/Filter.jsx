import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import { nanoid } from '@reduxjs/toolkit';
import css from './Filter.module.css';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = evt => {
    const filter = evt.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Search contact</h3>
      <label className={css.label} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={handleFilter}
        type="text"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};
