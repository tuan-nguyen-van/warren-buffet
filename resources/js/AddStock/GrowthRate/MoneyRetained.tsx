import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useAppSelector } from '../../app/redux-hooks';
import { getAddStockState } from '../addStockSlice';
import applyAxios from '../../CustomHooks/applyAxios';
import { useParams } from 'react-router-dom';

type Props = {
  years: number[];
};

const MoneyRetained = ({ years }: Props) => {
  const { editStockId } = useParams();
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [retainedMoney, setRetainedMoney] = useState('');
  const [fromYearErrorText, setFromYearErrorText] = useState('');
  const [toYearErrorText, setToYearErrorText] = useState('');
  const { stockId, disableStep } = useAppSelector(getAddStockState);

  useEffect(() => {
    if (editStockId) {
      applyAxios(
        { method: 'get', url: '/retained-earning/' + editStockId },
        function (response) {
          const data: App.RetainedEarning.ChosenYears = response.data;
          if (data) {
            setFromYear(data.year_from);
            setToYear(data.year_to);
            setRetainedMoney(data.value.toString());
          }
        }
      );
    }
  }, [editStockId]);

  const handleCaculateChosenYears = () => {
    !fromYear ? setFromYearErrorText('Choose year') : setFromYearErrorText('');
    !toYear ? setToYearErrorText('Choose year') : setToYearErrorText('');
    if (+fromYear >= parseInt(toYear)) {
      setFromYearErrorText('Choose From Year less than To Year');
    }

    if (!fromYearErrorText && !toYearErrorText) {
      applyAxios(
        {
          method: 'post',
          url: '/calculate-retained-earning',
          data: {
            stock_id: stockId,
            fromYear: fromYear,
            toYear: toYear,
          },
        },
        function (response) {
          setRetainedMoney(response.data);
        },
        function (error) {
          console.log(error);
        }
      );
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Retained earning from {fromYear ? fromYear : '(year)'} to{' '}
        {toYear ? toYear : '(year)'} : {retainedMoney}
      </Typography>
      <Grid container spacing={0} sx={{ textAlign: 'center', mt: 2 }}>
        <Grid item xs={0} lg={3} />
        <Grid item xs={6} lg={2} sx={{ mr: 1, ml: 1 }}>
          <FormControl fullWidth error={!!fromYearErrorText} sx={{ mt: 2 }}>
            <InputLabel id="year-label">From Year</InputLabel>
            <Select
              labelId="year-label"
              value={fromYear}
              label="Year"
              onChange={(e) => setFromYear(e.target.value)}
              fullWidth
              variant="standard"
              sx={{ position: 'relative', mt: 2 }}
              disabled={disableStep.GrowthRate}
            >
              {years.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            {!!fromYearErrorText && (
              <FormHelperText>{fromYearErrorText}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6} lg={2} sx={{ ml: 1, mr: 1 }}>
          <FormControl fullWidth error={!!toYearErrorText} sx={{ mt: 2 }}>
            <InputLabel id="year-label">To Year</InputLabel>
            <Select
              labelId="year-label"
              value={toYear}
              label="Year"
              onChange={(e) => setToYear(e.target.value)}
              fullWidth
              variant="standard"
              sx={{ position: 'relative', mt: 2 }}
              disabled={disableStep.GrowthRate}
            >
              {years.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            {!!toYearErrorText && (
              <FormHelperText>{toYearErrorText}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={6} lg={2} sx={{ textAlign: 'left', ml: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{ mt: 1.5 }}
            onClick={handleCaculateChosenYears}
            disabled={disableStep.GrowthRate}
          >
            <CalculateIcon sx={{ mr: 0.5 }} /> Calculate
          </Button>
        </Grid>
        <Grid item xs={0} lg={3} />
      </Grid>
    </>
  );
};

export default MoneyRetained;
