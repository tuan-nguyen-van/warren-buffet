import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useParams } from 'react-router-dom';
import { getAddStockState, changeDisableStep } from '../addStockSlice';
import { useAppSelector, useAppDispatch } from '../../app/redux-hooks';
import useAxios from '../../CustomHooks/useAxios';
import MenuItem from '@mui/material/MenuItem';
import { toggleOpen, changeAlertText } from '../../Error/errorAlertSlice';

type Props = {
  years: number[];
};

const CalculateChosenYears = ({ years }: Props) => {
  const { editStockId } = useParams();
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [averageGrowthRate, setAverageGrowthRate] = useState('');
  const [fromYearErrorText, setFromYearErrorText] = useState('');
  const [toYearErrorText, setToYearErrorText] = useState('');
  const dispatch = useAppDispatch();
  const { stockId, disableStep } = useAppSelector(getAddStockState);

  useEffect(() => {
    if (stockId && editStockId) {
      useAxios(
        { method: 'get', url: '/chosen-growth-rates/' + stockId },
        function (response) {
          const data: App.GrowthRate.ChosenData = response.data;
          if (data) {
            setFromYear(data.year_from);
            setToYear(data.year_to);
            setAverageGrowthRate(data.value + '%');
          }
        }
      );
    }
  }, [stockId, editStockId]);

  const handleCaculateChosenYears = () => {
    !fromYear ? setFromYearErrorText('Choose year') : setFromYearErrorText('');
    !toYear ? setToYearErrorText('Choose year') : setToYearErrorText('');
    if (+fromYear >= parseInt(toYear)) {
      setFromYearErrorText('Choose From Year less than To Year');
    }
    if (!fromYearErrorText && !toYearErrorText) {
      useAxios(
        {
          method: 'post',
          url: '/calculate-growth-rate-with-chosen-years',
          data: {
            stock_id: stockId,
            fromYear: fromYear,
            toYear: toYear,
          },
        },
        function (response) {
          setAverageGrowthRate(response.data + '%');
          dispatch(changeDisableStep(['Assumption', false]));
        },
        function (error) {
          if (error.response.status === 404) {
            dispatch(toggleOpen());
            dispatch(changeAlertText(error.response.data));
          }
        }
      );
    }
  };

  return (
    <Box component="div" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h5">
        Decide chosen years to calculate growth rate for this stock.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Average growth rate from {fromYear ? fromYear : '(year)'} to{' '}
        {toYear ? toYear : '(year)'} : {averageGrowthRate}
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
    </Box>
  );
};

export default CalculateChosenYears;
