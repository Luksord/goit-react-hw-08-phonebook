import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';
import css from './Login.module.css';

// export default function Login() {
//   return (
//     <div>
//       <Helmet>
//         <title>Login</title>
//       </Helmet>
//       <LoginForm />
//     </div>
//   );
// }

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={css.form}>
        <h2 className={css.form_title}>Log in</h2>
        <form
          className={css.form_container}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={css.form_label}>Email </label>
          <input
            className={css.form_input}
            type="email"
            name="email"
            id="login-email"
          />

          <label className={css.form_label}>Password </label>
          <input
            className={css.form_input}
            type="password"
            name="password"
            id="login-password"
          />

          <button className={css.form_btn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
