import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import axios from 'axios';
import CalculationTable from './CalculationTable';

type Props = {
  edit: boolean;
  stockId: number;
};

type Data = DataValue[];

export type DataValue = {
  [index: string]:
    | {
        discounted_value?: number;
        future_value?: number;
        intrinsic_value: number;
        growth_rate?: number;
      }
    | number
    | string;
  total_pe: number;
  total_remained_years: { intrinsic_value: number };
  intrinsic_price: number;
  option: number;
  next_10_years: string;
  next_10_to_20_years: string;
  chosen_eps: number;
};

const Calculation = ({ edit, stockId }: Props) => {
  const [data, setData] = useState<Data>([]);

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
    if (edit && stockId) {
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
  }, []);

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
