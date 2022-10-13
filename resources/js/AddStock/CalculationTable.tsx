import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataValue } from './Calculation';
import { Typography } from '@mui/material';

type Props = {
  option: DataValue;
  key: number;
};

type YearDatas = YearData[];

type YearData = [
  string,
  {
    discounted_value: number;
    future_value: number;
    intrinsic_value: number;
    growth_rate: number;
  }
];
const CalculationTable = ({ option }: Props) => {
  const [yearDatas, setYearDatas] = useState<YearDatas>([]);
  useEffect(() => {
    const entries = Object.entries(option);
    setYearDatas(
      entries.filter((entry) => Number.isInteger(+entry[0])) as YearDatas
    );
  }, [option]);

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              <Typography variant="h5">Option: {option.option}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Discounted Value</TableCell>
            <TableCell align="left">Future Value</TableCell>
            <TableCell align="left">Growth Rate</TableCell>
            <TableCell align="left">Intrinsic Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {yearDatas.map((yearData) => (
            <TableRow key={yearData[0]}>
              <TableCell align="left">{yearData[0]}</TableCell>
              <TableCell align="left">{yearData[1].discounted_value}</TableCell>
              <TableCell align="left">{yearData[1].future_value}</TableCell>
              <TableCell align="left">{yearData[1].growth_rate}</TableCell>
              <TableCell align="left">{yearData[1].intrinsic_value}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={4} colSpan={3} sx={{ border: 'none' }} />
            <TableCell align="left">Remained Years</TableCell>
            <TableCell align="left">
              {option.total_remained_years.intrinsic_value}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Total PE</TableCell>
            <TableCell align="left">{option.total_pe}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Total PE</TableCell>
            <TableCell align="left">{option.chosen_eps}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left">Intrinsic Price</TableCell>
            <TableCell align="left">{option.intrinsic_price}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalculationTable;
