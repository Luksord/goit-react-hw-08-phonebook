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
      <div className={css.registration_container}>
        <h2 className={css.heading}>Registration</h2>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label className={css.label} htmlFor="register-name">
              Username
            </label>
            <input
              className={css.input}
              type="text"
              name="name"
              id="register-name"
            />
          </div>
          <div>
            <label className={css.label} htmlFor="register-email">
              Email
            </label>
            <input
              className={css.input}
              type="text"
              name="email"
              id="register-email"
            />
          </div>
          <div>
            <label className={css.label} htmlFor="register-password">
              Password
            </label>
            <input
              className={css.input}
              type="text"
              name="password"
              id="register-password"
            />
          </div>
          <button className={css.submitBtn} type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
