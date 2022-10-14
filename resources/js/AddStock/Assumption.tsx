import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AssumedOption from './AssumedOption';
import Divider from '@mui/material/Divider';
import EpsToCalculate from './EpsToCalculate';

const Assumption = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Divider>
        <Typography variant="h5">Step 4: Assumption</Typography>
      </Divider>

      <AssumedOption option={1} />
      <AssumedOption option={2} />
      <EpsToCalculate />
    </Box>
  );
};

export default Assumption;
