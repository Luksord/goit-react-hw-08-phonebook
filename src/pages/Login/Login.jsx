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
      <div className={css.login_container}>
        <h2 className={css.heading}>Log in</h2>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label className={css.label}>
              Email
              <input
                className={css.input}
                type="email"
                name="email"
                id="login-email"
              />
            </label>
          </div>
          <div>
            <label className={css.label}>
              Password
              <input
                className={css.input}
                type="password"
                name="password"
                id="login-password"
              />
            </label>
          </div>
          <button className={css.submitBtn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
