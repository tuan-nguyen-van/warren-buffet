import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import AssumedOption from './AssumedOption';
import Divider from '@mui/material/Divider';
import EpsToCalculate from './EpsToCalculate';
import { getAddStockState } from './addStockSlice';
import { useAppSelector } from '../app/redux-hooks';

const Assumption = () => {
  const { disableStep } = useAppSelector(getAddStockState);
  return (
    <Box
      sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}
      className={disableStep.Assumption ? 'disabledText' : ''}
    >
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
