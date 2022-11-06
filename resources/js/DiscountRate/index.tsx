import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useAppSelector } from '../app/redux-hooks';
import { changeDiscountRate, getDiscountRate } from './discountSlice';
import { useAppDispatch } from '../app/redux-hooks';
import applyAxios from '../CustomHooks/applyAxios';

type DiscountRateData = {
  id: number;
  value: string;
  updated_at: string;
  created_at: string;
};

const DiscountRate = () => {
  const [value, setValue] = useState<string | number>('');
  const [error, setError] = useState(false);
  const discountRate = useAppSelector(getDiscountRate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(discountRate);
  }, [discountRate]);

  const handleAddDiscountRate = () => {
    if (!value) {
      setError(true);
      return;
    }

    applyAxios(
      { method: 'post', url: '/store-discount-rate', data: { value: value } },
      function (response) {
        const data: DiscountRateData = response.data;
        dispatch(changeDiscountRate(data.value));
      }
    );
  };

  return (
    <Box component="div" sx={{ mt: 3 }}>
      <TextField
        variant="standard"
        label="Enter Discount Rate(%)"
        type="number"
        sx={{ width: 200 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={error}
      />
      <IconButton color="primary" size="large" onClick={handleAddDiscountRate}>
        <AddBoxIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default DiscountRate;
