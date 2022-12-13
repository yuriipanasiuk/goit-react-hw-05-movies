import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header';
import { Layout } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
