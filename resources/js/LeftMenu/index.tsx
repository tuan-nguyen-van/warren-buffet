import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from './menu';

const LeftMenu = () => {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={2}
        sx={{ height: 50, marginTop: 0, paddingTop: 0 }}
      >
        <Menu></Menu>
      </Grid>
    </Container>
  );
};

export default LeftMenu;
