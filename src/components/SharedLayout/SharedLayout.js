import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
