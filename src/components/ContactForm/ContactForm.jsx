import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form[0].value;
    const phone = form[1].value;
    const nameExists = contacts.some(contact => contact.name === name);
    if (nameExists) {
      alert(name + ' is already in contacts.');
    } else {
      dispatch(addContact({ name, phone }));
    }
    form.reset();
  };

  return (
    <section className={css.form}>
      <h1 className={css.form_title}>Phonebook</h1>
      <form className={css.form_container} onSubmit={handleSubmit}>
        <label className={css.form_label} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={css.form_input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.form_label} htmlFor={numberInputId}>
          Number
        </label>
        <input
          className={css.form_input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must start with +, be at least 3 digits and can contain spaces, dashes"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

// =======================================================================================

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(state => state.contacts);
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const exists = contacts.some(
//       contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//     );
//     if (exists) {
//       alert(`${name} is already in contacts`);
//     } else {
//       dispatch(addContact(name, number));
//       setName('');
//       setNumber('');
//     }
//   };

//   return (
//     <section className={css.form}>
//       <h1 className={css.form_title}>Phonebook</h1>
//       <form className={css.form_container} onSubmit={handleSubmit}>
//         <label className={css.form_label}>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={event => setName(event.target.value)}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter name"
//           className={css.form_input}
//           required
//         />
//         <label className={css.form_label}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={event => setNumber(event.target.value)}
//           pattern="[0-9+\-()\s]+"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number"
//           className={css.form_input}
//           required
//         />
//         <button className={css.form_btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     </section>
//   );
// };

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

// =======================================================================================

// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/actions';

// export const ContactForm = ({ addContact }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     // const value = form.elements.name.value
//     dispatch(addContact({ id: nanoid(), name, number }));
//     form.reset();
//   };

//   return (
//     <section className={css.form}>
//       <h1 className={css.form_title}>Phonebook</h1>
//       <form className={css.form_container} onSubmit={handleSubmit}>
//         <label className={css.form_label}>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={event => setName(event.target.value)}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           placeholder="Enter name"
//           className={css.form_input}
//           required
//         />
//         <label className={css.form_label}>Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={event => setNumber(event.target.value)}
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           pattern="[0-9+\-()\s]+"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           placeholder="Enter phone number"
//           className={css.form_input}
//           required
//         />
//         <button className={css.form_btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     </section>
//   );
// };

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

// =======================================================================================
