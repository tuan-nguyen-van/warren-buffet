import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Grid';
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
import applyAxios from '../../CustomHooks/applyAxios';
import { useAppSelector, useAppDispatch } from '../../app/redux-hooks';
import { getAddStockState, changeDisableStep } from '../addStockSlice';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Graph from './Graph';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import DeleteYearDataDialog from './DeleteYearDataDialog';

export type GrowthRateData = {
  year: number;
  percent: number;
}[];

type Props = {
  years: number[];
};

const YearData = ({ years }: Props) => {
  const { editStockId } = useParams();
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const dispatch = useAppDispatch();
  const [year, setYear] = useState('');
  const [EPS, setEPS] = useState('');
  const [money_dividend, setMoney_dividend] = useState('');
  const [stock_dividend, setStock_dividend] = useState('');
  const [profit, setProfit] = useState('');
  const [ROEA, setROEA] = useState('');
  const [tableDatas, setTableDatas] = useState<App.GrowthRate.TableData[]>([]);
  const [editID, setEditID] = useState(0);
  const [editYear, setEditYear] = useState(0);
  const [graphData, setGraphData] = useState<GrowthRateData>();
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deleteFinancialMetricId, setDeleteFinancialMetricId] =
    React.useState<number>();

  const [inputErrors, setInputErrors] = useState({
    year: '',
    EPS: '',
    money_dividend: '',
    stock_dividend: '',
    profit: '',
    ROEA: '',
  });

  const addStockData = () => {
    const newInputErrors = { ...inputErrors };
    !year ? (newInputErrors.year = 'Select year') : (newInputErrors.year = '');
    !EPS ? (newInputErrors.EPS = 'Enter EPS') : (newInputErrors.EPS = '');
    !profit
      ? (newInputErrors.profit = 'Enter Profit')
      : (newInputErrors.profit = '');
    !money_dividend
      ? (newInputErrors.money_dividend = 'Enter Money Dividend')
      : (newInputErrors.money_dividend = '');
    !stock_dividend
      ? (newInputErrors.stock_dividend = 'Enter Stock Dividend')
      : (newInputErrors.stock_dividend = '');
    !ROEA ? (newInputErrors.ROEA = 'Enter ROEA') : (newInputErrors.ROEA = '');

    // Check inside tableDatas check if exist the record with year equal current year.
    const existDataForCurrentYear = tableDatas.find(
      (tableData) => +tableData.year === +year
    );

    if (
      (existDataForCurrentYear && !editID) ||
      (editID &&
        existDataForCurrentYear &&
        existDataForCurrentYear.id !== editID)
    ) {
      newInputErrors.year = 'This year existed, choose other';
      setInputErrors(newInputErrors);
      return;
    }

    setInputErrors(newInputErrors);

    if (
      stockId &&
      year &&
      EPS &&
      profit &&
      money_dividend &&
      stock_dividend &&
      ROEA
    ) {
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
        applyAxios(
          {
            method: 'put',
            url: '/financial-metrics/' + editID,
            data: stockData,
          },
          function () {
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
            setEditYear(0);
          }
        );
      } else {
        applyAxios(
          { method: 'post', url: '/financial-metrics', data: stockData },
          function (response) {
            setTableDatas([
              ...tableDatas,
              {
                id: +response.data.id,
                ...stockData,
              },
            ]);
            resetInputs();
          }
        );
      }
    }
  };

  useEffect(() => {
    if (stockId && editStockId) {
      applyAxios(
        { method: 'get', url: '/financial-metrics/' + stockId },
        function (response) {
          setTableDatas(response.data);
          dispatch(changeDisableStep(['GrowthRate', false]));
        }
      );
    }
  }, [stockId, editStockId, dispatch]);

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
    applyAxios(
      {
        method: 'post',
        url: '/calculate-growth-rates',
        data: { stock_id: stockId },
      },
      function (response) {
        setGraphData(response.data);
      }
    );
  };

  const handleDelete = (financialMetricId: number) => {
    setOpenDeleteDialog(true);
    setDeleteFinancialMetricId(financialMetricId);
  };

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {editYear ? `(Edit Year: ${editYear})` : ''}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth error={!!inputErrors.year}>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              value={year}
              label="Year"
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              variant="standard"
              disabled={disableStep.GrowthRate}
              sx={{ position: 'relative', mt: 2 }}
            >
              {years.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            {inputErrors.year && (
              <FormHelperText>{inputErrors.year}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="EPS (VND)"
            variant="standard"
            disabled={disableStep.GrowthRate}
            name="EPS"
            value={EPS}
            onChange={(e) => setEPS(e.target.value)}
            type="number"
            error={!!inputErrors.EPS}
            helperText={inputErrors.EPS}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Money Dividend (VND)"
            variant="standard"
            disabled={disableStep.GrowthRate}
            name="money_dividend"
            value={money_dividend}
            onChange={(e) => setMoney_dividend(e.target.value)}
            type="number"
            error={!!inputErrors.money_dividend}
            helperText={inputErrors.money_dividend}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Stock Dividend (%)"
            variant="standard"
            disabled={disableStep.GrowthRate}
            name="stock_dividend"
            value={stock_dividend}
            onChange={(e) => setStock_dividend(e.target.value)}
            type="number"
            error={!!inputErrors.stock_dividend}
            helperText={inputErrors.stock_dividend}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Profit (Billion VND)"
            variant="standard"
            disabled={disableStep.GrowthRate}
            name="profit"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            type="number"
            error={!!inputErrors.profit}
            helperText={inputErrors.profit}
          />
        </Grid>

        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="ROEA"
            variant="standard"
            disabled={disableStep.GrowthRate}
            name="ROEA"
            value={ROEA}
            onChange={(e) => setROEA(e.target.value)}
            type="number"
            error={!!inputErrors.ROEA}
            helperText={inputErrors.ROEA}
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <IconButton
            color="primary"
            size="large"
            onClick={addStockData}
            disabled={disableStep.GrowthRate}
          >
            <AddBoxIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 7 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
                      setEditYear(tableData.year);
                      setEditID(tableData.id);
                    }}
                  />
                  <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleDelete(tableData.id)}
                  />
                </TableCell>
                <TableCell align="left">{tableData.year}</TableCell>
                <TableCell align="left">{tableData.EPS}</TableCell>
                <TableCell align="left">{tableData.money_dividend}</TableCell>
                <TableCell align="left">
                  {Math.round(tableData.stock_dividend)}
                </TableCell>
                <TableCell align="left">
                  {Math.round(tableData.profit)}
                </TableCell>
                <TableCell align="left">
                  {(+tableData.ROEA).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Graph
        graphData={graphData}
        setGraphData={useCallback(setGraphData, [])}
      />

      <Box component="div" sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={handleCalculation}
          disabled={disableStep.GrowthRate}
        >
          <CalculateIcon sx={{ mr: 0.5 }} /> Calculate Growth Rates
        </Button>
      </Box>

      <DeleteYearDataDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        id={deleteFinancialMetricId}
        tableDatas={tableDatas}
        setTableDatas={setTableDatas}
      />
    </>
  );
};

export default YearData;
