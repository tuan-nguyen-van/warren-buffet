import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import Divider from '@mui/material/Divider';

type Props = {
  disableStep2: boolean;
  stockId: number;
  edit: boolean;
  setDisableStep2: React.Dispatch<React.SetStateAction<boolean>>;
};

type TableData = {
  id: number;
  stock_id: number;
  year: number;
  EPS: number;
  money_dividend: number;
  stock_dividend: number;
  profit: number;
  ROEA: number;
  created_at?: string;
  updated_at?: string;
};

type ChosenData = {
  chosen: number;
  created_at: string;
  id: number;
  stock_id: number;
  updated_at: string;
  value: string;
  year_from: string;
  year_to: string;
};

type GrowthTextData = {
  [index: string]: string;
};

const Step2 = ({ disableStep2, stockId, edit, setDisableStep2 }: Props) => {
  const [year, setYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 12; i < currentYear; i++) {
    years.push(i);
  }
  const chosenYearsFrom = years.filter((year) => year <= currentYear - 4);
  const chosenYearsTo = years.filter((year) => year > currentYear - 6);

  const [EPS, setEPS] = useState('');
  const [money_dividend, setMoney_dividend] = useState('');
  const [stock_dividend, setStock_dividend] = useState('');
  const [profit, setProfit] = useState('');
  const [ROEA, setROEA] = useState('');
  const [yearError, setYearError] = useState(false);
  const [yearErrorText, setYearErrorText] = useState('Choose Year');
  const [epsError, setEpsError] = useState(false);
  const [profitError, setProfitError] = useState(false);
  const [tableDatas, setTableDatas] = useState<TableData[]>([]);
  const [editID, setEditID] = useState(0);
  const [growthRatesText, setGrowthRatesText] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [fromYearError, setFromYearError] = useState(false);
  const [fromYearErrorText, setFromYearErrorText] = useState('');
  const [toYear, setToYear] = useState('');
  const [toYearError, setToYearError] = useState(false);
  const [toYearErrorText, setToYearErrorText] = useState('');
  const [averageGrowthRate, setAverageGrowthRate] = useState('');

  const getGrowthRatesText = (data: GrowthTextData) => {
    let text = '';
    for (const [key, value] of Object.entries(data)) {
      text += ` ${key}: ${value};`;
    }
    setGrowthRatesText(text.trim());
  };

  console.log(stockId);
  useEffect(() => {
    if (stockId && edit) {
      axios
        .get('/financial-metrics/' + stockId)
        .then(function (response) {
          setTableDatas(response.data);
          setDisableStep2(false);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get('/calculated-growth-rates/' + stockId)
        .then(function (response) {
          getGrowthRatesText(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [stockId, edit]);

  useEffect(() => {
    if (stockId && edit) {
      axios
        .get('/chosen-growth-rates/' + stockId)
        .then(function (response) {
          const data: ChosenData = response.data;
          setFromYear(data.year_from);
          setToYear(data.year_to);
          setAverageGrowthRate(data.value + '%');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [stockId, edit]);

  const addStockData = () => {
    // Validate Year, EPS, Profit
    !year ? setYearError(true) : setYearError(false);
    !EPS ? setEpsError(true) : setEpsError(false);
    !profit ? setProfitError(true) : setProfitError(false);

    // Check inside tableDatas check if exist the record with year equal current year.
    const existDataForCurrentYear = tableDatas.find(
      (tableData) => tableData.year === +year
    );
    if (existDataForCurrentYear && !editID) {
      setYearError(true);
      setYearErrorText('This year existed, choose other');
      return;
    } else if (
      editID &&
      existDataForCurrentYear &&
      existDataForCurrentYear.id !== editID
    ) {
      setYearError(true);
      setYearErrorText('This year existed, choose other');
      return;
    } else {
      setYearErrorText('Choose Year');
    }

    if (stockId && year && EPS && profit) {
      const stockData = {
        stock_id: stockId,
        year: +year,
        EPS: +EPS,
        money_dividend: +money_dividend,
        stock_dividend: +stock_dividend,
        profit: +profit,
        ROEA: +ROEA,
      };

      if (editID) {
        axios
          .put('/financial-metrics/' + editID, stockData)
          .then(function () {
            const newTableDatas = [...tableDatas];
            newTableDatas[
              tableDatas.findIndex((tableData) => tableData.id === editID)
            ] = {
              id: editID,
              ...stockData,
            };
            setTableDatas(newTableDatas);
            resetInputs();
            setEditID(0);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post('/financial-metrics', stockData)
          .then(function (response) {
            setTableDatas([
              ...tableDatas,
              {
                id: +response.data.id,
                ...stockData,
              },
            ]);
            resetInputs();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const resetInputs = () => {
    setYear('');
    setEPS('');
    setMoney_dividend('');
    setStock_dividend('');
    setProfit('');
    setROEA('');
  };

  const handleCalculation = () => {
    if (tableDatas.length < 3) {
      alert('Need at least 3 year records to start calculation');
    }
    axios
      .post('/calculate-growth-rates', { stock_id: stockId })
      .then(function (response) {
        getGrowthRatesText(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCaculateChosenYears = () => {
    //Validate from year and to year must have value
    if (!fromYear) {
      setFromYearError(true);
      setFromYearErrorText('Choose year');
    } else {
      setFromYearError(false);
      setFromYearErrorText('');
    }

    if (!toYear) {
      setToYearError(true);
      setToYearErrorText('Choose year');
    } else {
      setToYearError(false);
      setToYearErrorText('Choose year');
    }
    console.log(toYear, fromYear);
    if (+toYear < 3 + parseInt(fromYear)) {
      console.log(toYear, fromYear);
      setToYearError(true);
      setFromYearError(true);
      setToYearErrorText('Choose To Year at least From Year plus 3');
    }

    //Send years to server with stockID
    axios
      .post('/calculate-growth-rate-with-chosen-years', {
        stock_id: stockId,
        fromYear: fromYear,
        toYear: toYear,
      })
      .then(function (response) {
        setAverageGrowthRate(response.data + '%');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Divider>
        <Typography
          variant="h5"
          sx={{ color: disableStep2 ? 'text.disabled' : 'inherit' }}
        >
          Step 2: Growth rate
        </Typography>
      </Divider>
      <Typography
        variant="h5"
        sx={{ color: disableStep2 ? 'text.disabled' : 'inherit' }}
      >
        {editID ? `(Edit ID: ${editID})` : ''}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth error={yearError}>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              value={year}
              label="Year"
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              variant="standard"
              disabled={disableStep2}
              sx={{ position: 'relative', mt: 2 }}
            >
              {years.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            {yearError && <FormHelperText>{yearErrorText}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="EPS (VND)"
            variant="standard"
            disabled={disableStep2}
            name="EPS"
            value={EPS}
            onChange={(e) => setEPS(e.target.value)}
            type="number"
            error={epsError}
            helperText={epsError ? 'Enter EPS' : ''}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Money Dividend (VND)"
            variant="standard"
            disabled={disableStep2}
            name="money_dividend"
            value={money_dividend}
            onChange={(e) => setMoney_dividend(e.target.value)}
            type="number"
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Stock Dividend (VND)"
            variant="standard"
            disabled={disableStep2}
            name="stock_dividend"
            value={stock_dividend}
            onChange={(e) => setStock_dividend(e.target.value)}
            type="number"
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Profit (Billion VND)"
            variant="standard"
            disabled={disableStep2}
            name="profit"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            type="number"
            error={profitError}
            helperText={profitError ? 'Enter Profit' : ''}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="ROEA"
            variant="standard"
            disabled={disableStep2}
            name="ROEA"
            value={ROEA}
            onChange={(e) => setROEA(e.target.value)}
            type="number"
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <IconButton color="primary" size="large" onClick={addStockData}>
            <AddBoxIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 7 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Year</TableCell>
              <TableCell align="left">EPS</TableCell>
              <TableCell align="left">Money Dividend</TableCell>
              <TableCell align="left">Stock Dividend</TableCell>
              <TableCell align="left">Profit</TableCell>
              <TableCell align="left">ROEA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDatas.map((tableData) => (
              <TableRow
                key={tableData.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <EditIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      setYear(tableData.year.toString());
                      setEPS(tableData.EPS.toString());
                      setMoney_dividend(tableData.money_dividend.toString());
                      setStock_dividend(tableData.stock_dividend.toString());
                      setProfit(tableData.profit.toString());
                      setROEA(tableData.ROEA.toString());
                      setEditID(tableData.id);
                    }}
                  />
                  <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => console.log('btn click')}
                  />
                </TableCell>
                <TableCell align="left">{tableData.id}</TableCell>
                <TableCell align="left">{tableData.year}</TableCell>
                <TableCell align="left">{tableData.EPS}</TableCell>
                <TableCell align="left">{tableData.money_dividend}</TableCell>
                <TableCell align="left">{tableData.stock_dividend}</TableCell>
                <TableCell align="left">{tableData.profit}</TableCell>
                <TableCell align="left">{tableData.ROEA}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {growthRatesText && (
        <Box component="div" sx={{ textAlign: 'left', mt: 4 }}>
          {growthRatesText}
        </Box>
      )}
      <Box component="div" sx={{ textAlign: 'center' }}>
        <Button variant="contained" sx={{ mt: 4 }} onClick={handleCalculation}>
          <CalculateIcon sx={{ mr: 0.5 }} /> Calculate Growth Rates
        </Button>
      </Box>

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
            <FormControl fullWidth error={fromYearError} sx={{ mt: 2 }}>
              <InputLabel id="year-label">From Year</InputLabel>
              <Select
                labelId="year-label"
                value={fromYear}
                label="Year"
                onChange={(e) => setFromYear(e.target.value)}
                fullWidth
                variant="standard"
                sx={{ position: 'relative', mt: 2 }}
              >
                {chosenYearsFrom.map((year) => (
                  <MenuItem value={year} key={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
              {fromYearError && (
                <FormHelperText>{fromYearErrorText}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={6} lg={2} sx={{ ml: 1, mr: 1 }}>
            <FormControl fullWidth error={toYearError} sx={{ mt: 2 }}>
              <InputLabel id="year-label">To Year</InputLabel>
              <Select
                labelId="year-label"
                value={toYear}
                label="Year"
                onChange={(e) => setToYear(e.target.value)}
                fullWidth
                variant="standard"
                sx={{ position: 'relative', mt: 2 }}
              >
                {chosenYearsTo.map((year) => (
                  <MenuItem value={year} key={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
              {toYearError && (
                <FormHelperText>{toYearErrorText}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={6} lg={2} sx={{ textAlign: 'left', ml: 2, mt: 2 }}>
            <Button
              variant="contained"
              sx={{ mt: 1.5 }}
              onClick={handleCaculateChosenYears}
            >
              <CalculateIcon sx={{ mr: 0.5 }} /> Calculate
            </Button>
          </Grid>
          <Grid item xs={0} lg={3} />
        </Grid>
      </Box>
    </Box>
  );
};

export default Step2;
