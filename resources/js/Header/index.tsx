import React from 'react';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useAppDispatch } from '../app/redux-hooks';
import { toggle } from '../Content/sideBarSlice';

const Header: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <Container sx={{ height: 50, paddingTop: '10px' }} maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
            <MenuIcon
              className="menu-icon"
              onClick={() => dispatch(toggle())}
            />
            <HomeIcon className="home-icon" />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={[]}
            renderInput={(params) => <TextField {...params} label="Search" />}
            sx={{
              maxWidth: 600,
            }}
            size="small"
          />
        </Grid>
        <Grid item xs={2}>
          <Avatar
            alt="avatar"
            src="/images/warren-buffett.png"
            className="avatar"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
