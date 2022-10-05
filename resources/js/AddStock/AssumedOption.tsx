import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

type Props = {
  name: string;
};
const AssumedOption = ({ name }: Props) => {
  return (
    <Grid container spacing={0} sx={{ textAlign: 'left', mt: 3 }}>
      <Grid item xs={2} sx={{ borderRight: '1px solid black' }}>
        <Typography variant="h6" sx={{ position: 'relative', top: 10 }}>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Assumed growth rate for next 10 years(%)"
              variant="standard"
              name="next-10"
              type="number"
              sx={{ width: '80%', ml: 2, bottom: 10 }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Assumed growth rate for next 10 to 20 years(%)"
              variant="standard"
              name="next-10-20"
              type="number"
              sx={{ width: '80%', ml: 2, bottom: 10 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AssumedOption;
