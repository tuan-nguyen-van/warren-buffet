import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';

type EpsData = {
  chosen_eps: number;
  id: number;
  stock_id: number;
  updated_at: string;
  created_at: string;
};

const EpsToCalculate = () => {
  const [eps, setEps] = useState<string | number>('');
  const [epsError, setEpsError] = useState(false);
  const { stockId } = useAppSelector(getAddStockState);
  const { editStockId } = useParams();

  useEffect(() => {
    if (stockId && editStockId) {
      axios
        .get(`/chosen-eps/${stockId}`)
        .then(function (response) {
          const data: EpsData = response.data;
          setEps(data.chosen_eps);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [stockId, editStockId]);

  const handleAddEps = () => {
    if (!eps) {
      setEpsError(true);
    } else {
      setEpsError(false);
    }

    axios
      .post('/chosen-eps', {
        chosen_eps: +eps,
        stock_id: stockId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
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
        value={eps}
        onChange={(e) => setEps(e.target.value)}
        error={epsError}
        helperText={epsError ? 'Enter EPS' : ''}
      />
      <IconButton color="primary" size="large" onClick={handleAddEps}>
        <AddBoxIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default EpsToCalculate;
