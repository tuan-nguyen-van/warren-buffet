import React from 'react';
import Container from '@mui/material/Container';
import SideBar from '../SideBar';

const LeftMenu = () => {
  return (
    <Container maxWidth={false}>
      <SideBar />
    </Container>
  );
};

export default LeftMenu;
