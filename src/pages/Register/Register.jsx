import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import css from './Register.module.css';

// export default function Register() {
//   return (
//     <div>
//       <Helmet>
//         <title>Registration</title>
//       </Helmet>
//       <RegisterForm />
//     </div>
//   );
// }

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <main>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className={css.form}>
        <h2 className={css.form_title}>Registration</h2>
        <form
          className={css.form_container}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={css.form_label} htmlFor="register-name">
            Username
          </label>
          <input
            className={css.form_input}
            type="text"
            name="name"
            id="register-name"
          />
          <label className={css.form_label} htmlFor="register-email">
            Email
          </label>
          <input
            className={css.form_input}
            type="text"
            name="email"
            id="register-email"
          />
          <label className={css.form_label} htmlFor="register-password">
            Password
          </label>
          <input
            className={css.form_input}
            type="text"
            name="password"
            id="register-password"
          />
          <button className={css.form_btn} type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
