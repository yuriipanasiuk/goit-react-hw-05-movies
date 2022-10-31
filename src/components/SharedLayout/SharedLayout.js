import Box from 'components/Box';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
