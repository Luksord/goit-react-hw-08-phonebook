import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
// import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
