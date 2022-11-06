import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { getAddStockState } from './addStockSlice';
import { useAppSelector } from '../app/redux-hooks';
import YearData from './GrowthRate/YearData';
import CalculateChosenYears from './GrowthRate/CalculateChosenYears';

const GrowthRate = () => {
  const { disableStep } = useAppSelector(getAddStockState);

  const currentYear = new Date().getFullYear();
  const years: number[] = [];
  for (let i = currentYear - 12; i < currentYear; i++) {
    years.push(i);
  }

  return (
    <Box
      sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}
      className={disableStep.GrowthRate ? 'disabledText' : ''}
    >
      <Divider>
        <Typography variant="h5">Step 3: Growth rate</Typography>
      </Divider>
      <YearData years={useMemo(() => years, [years])} />
      <CalculateChosenYears years={useMemo(() => years, [years])} />
    </Box>
  );
};

export default GrowthRate;
