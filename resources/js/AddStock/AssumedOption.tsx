import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/redux-hooks';
import useAxios from '../CustomHooks/useAxios';

type Props = {
  option: number;
};

const AssumedOption = ({ option }: Props) => {
  const [nextTen, setNextTen] = useState('');
  const [nextTenError, setNextTenError] = useState(false);
  const [nextTenHelperText, setNextTenHelperText] = useState('');
  const [nextTenToTwenty, setNextTenToTwenty] = useState('');
  const [nextTenToTwentyError, setNextTenToTwentyError] = useState(false);
  const [nextTenToTwentyHelperText, setNextTenToTwentyHelperText] =
    useState('');
  const [valid, setValid] = useState(true);
  const { stockId } = useAppSelector(getAddStockState);
  const { editStockId } = useParams();
  const { disableStep } = useAppSelector(getAddStockState);

  useEffect(() => {
    if (stockId && editStockId) {
      useAxios(
        {
          method: 'get',
          url: `/growth_assumptions?stock_id=${stockId}&option=${option}`,
        },
        function (response) {
          const data: App.AssumedOption.GrowthData = response.data;
          setNextTen(data.next_10_years);
          setNextTenToTwenty(data.next_10_to_20_years);
        }
      );
    }
  }, [stockId, editStockId]);

  const handleAddGrowth = () => {
    //Check nextTen and nextTenToTwenty have value
    if (!nextTen) {
      setNextTenError(true);
      setNextTenHelperText('Enter growth rate');
      setValid(false);
    } else {
      setNextTenError(false);
      setNextTenHelperText('');
      setValid(true);
    }

    if (!nextTenToTwenty) {
      setNextTenToTwentyError(true);
      setNextTenToTwentyHelperText('Enter growth rate');
      setValid(false);
    } else {
      setNextTenToTwentyError(false);
      setNextTenToTwentyHelperText('');
      setValid(true);
    }

    if (valid) {
      useAxios(
        {
          method: 'post',
          url: '/growth_assumptions',
          data: {
            stock_id: stockId,
            next_10_years: nextTen,
            next_10_to_20_years: nextTenToTwenty,
            option: option,
          },
        },
        function (response) {
          console.log(response.data);
        }
      );
    }
  };

  return (
    <Grid container spacing={0} sx={{ textAlign: 'left', mt: 3 }}>
      <Grid item xs={2} sx={{ borderRight: '1px solid black' }}>
        <Typography variant="h6" sx={{ position: 'relative', top: 10 }}>
          Option {option}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Growth rate for next 10 years (%)"
              variant="standard"
              name="next-10"
              type="number"
              sx={{ width: '90%', ml: 2, bottom: 10 }}
              value={nextTen}
              onChange={(e) => setNextTen(e.target.value)}
              error={nextTenError}
              helperText={nextTenHelperText}
              disabled={disableStep.Assumption}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Growth rate for next 10-20 years (%)"
              variant="standard"
              name="next-10-20"
              type="number"
              sx={{ width: '90%', ml: 2, bottom: 10 }}
              value={nextTenToTwenty}
              onChange={(e) => setNextTenToTwenty(e.target.value)}
              error={nextTenToTwentyError}
              helperText={nextTenToTwentyHelperText}
              disabled={disableStep.Assumption}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          color="primary"
          size="large"
          onClick={handleAddGrowth}
          disabled={disableStep.Assumption}
        >
          <AddBoxIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AssumedOption;
