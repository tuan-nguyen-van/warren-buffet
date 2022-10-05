import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AssumedOption from './AssumedOption';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const Step3 = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Divider>
        <Typography variant="h5">Step 3: Assumption</Typography>
      </Divider>

      <AssumedOption name="Option 1" />
      <AssumedOption name="Option 2" />
      <Box component="div">
        <Typography variant="h6" sx={{ mt: 5, display: 'inline-block' }}>
          EPS to calculate stock price:
        </Typography>
        <TextField
          label="(%)"
          variant="standard"
          name="next-10-20"
          type="number"
          sx={{ width: '100px', mt: 2.5, ml: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Step3;
