import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../app/redux-hooks';
import { getAddStockState, changeDisableStep } from './addStockSlice';
import { useParams } from 'react-router-dom';
import applyAxios from '../CustomHooks/applyAxios';

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
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const { editStockId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editStockId) {
      applyAxios(
        { method: 'get', url: `/chosen-eps/${editStockId}` },
        function (response) {
          const data: EpsData = response.data;
          setEps(data.chosen_eps);
        }
      );
    }
  }, [editStockId]);

  const handleAddEps = () => {
    if (!eps) {
      setEpsError(true);
    } else {
      setEpsError(false);
    }

    applyAxios(
      {
        method: 'post',
        url: '/chosen-eps',
        data: {
          chosen_eps: +eps,
          stock_id: stockId,
        },
      },
      function () {
        dispatch(changeDisableStep(['Calculation', false]));
      }
    );
  };

  return (
    <Box component="div">
      <Typography variant="h6" sx={{ mt: 5, display: 'inline-block' }}>
        EPS to calculate stock price:
      </Typography>
      <TextField
        variant="standard"
        name="next-10-20"
        type="number"
        sx={{ width: '100px', mt: 4, ml: 2 }}
        value={eps}
        onChange={(e) => setEps(e.target.value)}
        error={epsError}
        helperText={epsError ? 'Enter EPS' : ''}
        disabled={disableStep.GrowthRate}
      />
      <IconButton
        color="primary"
        size="large"
        onClick={handleAddEps}
        disabled={disableStep.GrowthRate}
      >
        <AddBoxIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default EpsToCalculate;
