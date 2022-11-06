import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalculationTable from './CalculationTable';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';
import applyAxios from '../CustomHooks/applyAxios';

type Data = App.AddStock.Calculation.DataValue[];

const Calculation = () => {
  const [data, setData] = useState<Data>([]);
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const { editStockId } = useParams();
  const handleCalculation = () => {
    applyAxios(
      {
        method: 'post',
        url: '/calculate-intrinsic-value',
        data: {
          stockId: stockId,
        },
      },
      function (response) {
        const responseData: Data = response.data;
        setData(responseData);
      }
    );
  };

  useEffect(() => {
    if (editStockId && stockId) {
      applyAxios(
        { method: 'get', url: '/intrinsic-value-calculation/' + stockId },
        function (response) {
          const responseData: Data = response.data;
          setData(responseData);
        }
      );
    }
  }, [editStockId, stockId]);

  return (
    <Box
      component="div"
      sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}
      className={disableStep.Calculation ? 'disabledText' : ''}
    >
      <Divider>
        <Typography variant="h5">Step 5: Calculation</Typography>
      </Divider>

      <Box component="div" sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={handleCalculation}
          disabled={disableStep.Calculation}
        >
          <CalculateIcon sx={{ mr: 0.5 }} />
          Calculate Intrinsic Stock Value
        </Button>
      </Box>
      {data.map((option) => (
        <CalculationTable option={option} key={option.option} />
      ))}
    </Box>
  );
};

export default Calculation;
