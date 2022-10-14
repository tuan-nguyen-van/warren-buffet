import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import axios from 'axios';
import CalculationTable from './CalculationTable';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';

type Data = App.AddStock.Calculation.DataValue[];

const Calculation = () => {
  const [data, setData] = useState<Data>([]);
  const { stockId } = useAppSelector(getAddStockState);
  const { editStockId } = useParams();
  const handleCalculation = () => {
    axios
      .post('/calculate-intrinsic-value', {
        stockId: stockId,
      })
      .then(function (response) {
        const responseData: Data = response.data;
        setData(responseData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (editStockId && stockId) {
      axios
        .get('/intrinsic-value-calculation/' + stockId)
        .then(function (response) {
          const responseData: Data = response.data;
          setData(responseData);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [editStockId, stockId]);

  return (
    <Box component="div" sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Divider>
        <Typography variant="h5">Step 5: Calculation</Typography>
      </Divider>

      <Box component="div" sx={{ textAlign: 'center' }}>
        <Button variant="contained" sx={{ mt: 4 }} onClick={handleCalculation}>
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
