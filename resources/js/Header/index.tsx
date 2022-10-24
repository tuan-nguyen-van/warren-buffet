import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import MenuButton from '../components/MenuButton';
import Stack from '@mui/material/Stack';

const Header: React.FunctionComponent = () => {
  return (
    <Grid container spacing={2} sx={{ position: 'relative' }}>
      <Grid item xs={10} sx={{ paddingLeft: '0px !important' }}>
        <Stack direction="row">
          {window.isMobile && <MenuButton />}
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={[]}
            renderInput={(params) => <TextField {...params} label="Search" />}
            sx={{
              ml: window.isMobile ? 1 : 0,
              maxWidth: 600,
            }}
            size="small"
            fullWidth
          />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Avatar
          alt="avatar"
          src="/images/warren-buffett.png"
          className="avatar"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
