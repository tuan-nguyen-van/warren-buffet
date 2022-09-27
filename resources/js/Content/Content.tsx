import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Outlet />
    </Box>
  );
};

export default Content;
