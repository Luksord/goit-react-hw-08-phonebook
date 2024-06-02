import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.filter_container}>
      <label className={css.filter_label}>Find contacts by name</label>
      <input
        className={css.filter_input}
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
// =======================================================================================

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';
// import { useDispatch } from 'react-redux';
// import { setFilter } from '../../redux/filterSlice';

// export const Filter = ({ filter }) => {
//   const dispatch = useDispatch();

//   const handleChange = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   return (
//     <div className={css.filter_container}>
//       <label className={css.filter_label}>Find contacts by name</label>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//         className={css.filter_input}
//         placeholder="Enter contact"
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
// };

// =======================================================================================

// import PropTypes from 'prop-types';
// import css from '../Filter/Filter.module.css';

// export const Filter = ({ filter, onChangeInput }) => {
//   return (
//     <div className={css.filter_container}>
//       <label className={css.filter_label}>Find contacts by name </label>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={onChangeInput}
//         className={css.filter_input}
//         placeholder="Enter contact"
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChangeInput: PropTypes.func.isRequired,
// };

// =======================================================================================
