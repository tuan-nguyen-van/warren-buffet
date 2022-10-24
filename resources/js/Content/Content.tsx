import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Container from '@mui/material/Container';

const Content = () => {
  return (
    <>
      <Container sx={{ height: 50, pt: 1 }} maxWidth={false}>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Content;
