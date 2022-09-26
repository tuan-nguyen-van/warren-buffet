import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SideBar from '../SideBar';

const LeftMenu = () => {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} sx={{ height: 50, mt: 0, pd: 0 }}>
        <SideBar />
      </Grid>
    </Container>
  );
};

export default LeftMenu;
