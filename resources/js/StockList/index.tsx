import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    border: '1px solid rgba(224, 224, 224, 1)',
  },
}));

interface StockData {
  id: number;
  company_name: string;
  intrinsic_value_caculations: intrinsicValueCalculation;
  ticker_symbol: string;
  website: string;
  updated_at: string;
  created_at: string;
}

interface intrinsicValueCalculation {
  id: number;
  calculation_step: string;
  discount_rate: string;
  stock_id: number;
  updated_at: string;
  created_at: string;
}

const StockList = () => {
  const [followedStocks, setFollowedStock] = useState<StockData[]>();
  let stockNo = 0;
  useEffect(() => {
    axios
      .get('/stocks')
      .then(function ({ data }) {
        setFollowedStock(data as StockData[]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 5 }}>
      <Paper elevation={5} sx={{ p: 1.5, fontSize: '18px' }} component="span">
        Rule number 1: Don&rsquo;t lose money. Rule number 2, 3, 4, 5: See rule
        number 1.
      </Paper>
      <Box sx={{ mt: 4 }}>
        <Paper
          elevation={5}
          sx={{ p: 1.5, fontSize: '20px', mt: 5 }}
          component="span"
        >
          Followed stocks
        </Paper>
        <Paper sx={{ width: '100%' }}></Paper>

        <TableContainer sx={{ maxHeight: 600, mt: 2 }}>
          <Table stickyHeader sx={{ borderCollapse: 'collapse' }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={4}>
                  Details
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={2}>
                  PE
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={2}>
                  Margin of safety
                </StyledTableCell>

                <StyledTableCell align="center" colSpan={2}>
                  Intrinsic Price
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell sx={{ width: 115 }}>Action</StyledTableCell>
                <StyledTableCell>Symbol</StyledTableCell>
                <StyledTableCell>Market Price</StyledTableCell>
                <StyledTableCell>Opt 1</StyledTableCell>
                <StyledTableCell>Opt2</StyledTableCell>
                <StyledTableCell>Opt1</StyledTableCell>
                <StyledTableCell>Opt2</StyledTableCell>
                <StyledTableCell>Opt1</StyledTableCell>
                <StyledTableCell>Opt2</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {followedStocks &&
                followedStocks.map((stock) => (
                  <TableRow key={stock.id}>
                    <StyledTableCell>{stockNo++}</StyledTableCell>
                    <StyledTableCell>
                      <EditIcon />
                      <DeleteIcon />
                      <BookmarkRemoveIcon />
                    </StyledTableCell>
                    <StyledTableCell>{stock.ticker_symbol}</StyledTableCell>
                    <StyledTableCell>{stock.ticker_symbol}</StyledTableCell>
                    <StyledTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations.calculation_step
                        )[0].total_pe
                      }
                    </StyledTableCell>
                    <StyledTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations.calculation_step
                        )[1]?.total_pe
                      }
                    </StyledTableCell>
                    <StyledTableCell>50%</StyledTableCell>
                    <StyledTableCell>50%</StyledTableCell>
                    <StyledTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations.calculation_step
                        )[0].intrinsic_price
                      }
                    </StyledTableCell>
                    <StyledTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations.calculation_step
                        )[1]?.intrinsic_price
                      }
                    </StyledTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StockList;
