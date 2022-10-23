import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FullBorderTableCell from '../components/FullBorderTableCell';

const Home = () => {
  const [followedStocks, setFollowedStock] = useState<App.Stocks.StockData[]>();
  const [quotes, setQuotes] = useState<App.Quotes.Data[]>();
  let quotesCount = 1;

  let stockNo = 1;
  useEffect(() => {
    axios
      .get('/stocks-for-home')
      .then(function ({ data }) {
        setFollowedStock(data as App.Stocks.StockData[]);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('/quotes')
      .then(function ({ data }) {
        setQuotes(data as App.Quotes.Data[]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 3 }}>
      <Paper
        elevation={5}
        sx={{ p: 1.5, fontSize: '20px', mt: 2, textAlign: 'left' }}
        component="div"
      >
        {quotes?.map((quote) => (
          <>
            <Box component="span" key={quote.id} sx={{ lineHeight: 2 }}>
              {quotesCount++}. {quote.description} - {quote.author} -{' '}
            </Box>
            <br />
          </>
        ))}
      </Paper>
      <Box sx={{ mt: 5 }}>
        <Paper
          elevation={5}
          sx={{ p: 1.5, fontSize: '20px', mt: 5 }}
          component="span"
        >
          Followed Stocks
        </Paper>
        <Paper sx={{ width: '100%' }}></Paper>

        <TableContainer sx={{ maxHeight: 600, mt: 2 }}>
          <Table stickyHeader sx={{ borderCollapse: 'collapse' }}>
            <TableHead>
              <TableRow>
                <FullBorderTableCell align="center" colSpan={3}>
                  Details
                </FullBorderTableCell>
                <FullBorderTableCell align="center" colSpan={2}>
                  PE
                </FullBorderTableCell>
                <FullBorderTableCell align="center" colSpan={2}>
                  Margin of safety
                </FullBorderTableCell>

                <FullBorderTableCell align="center" colSpan={2}>
                  Intrinsic Price
                </FullBorderTableCell>
              </TableRow>
              <TableRow>
                <FullBorderTableCell sx={{ width: 20 }}>No</FullBorderTableCell>
                <FullBorderTableCell>Symbol</FullBorderTableCell>
                <FullBorderTableCell>Market Price</FullBorderTableCell>
                <FullBorderTableCell>Opt 1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
                <FullBorderTableCell>Opt1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
                <FullBorderTableCell>Opt1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {followedStocks &&
                followedStocks.map((stock) => (
                  <TableRow key={stock.id}>
                    <FullBorderTableCell sx={{ width: 20 }}>
                      {stockNo++}
                    </FullBorderTableCell>
                    <FullBorderTableCell>
                      <Link to={`/edit-stock/${stock.id}`}>
                        {stock.ticker_symbol}
                      </Link>
                    </FullBorderTableCell>
                    <FullBorderTableCell>
                      {stock.current_market_price}
                    </FullBorderTableCell>
                    <FullBorderTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations!.calculation_step
                        )[0].total_pe
                      }
                    </FullBorderTableCell>
                    <FullBorderTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations!.calculation_step
                        )[1]?.total_pe
                      }
                    </FullBorderTableCell>
                    <FullBorderTableCell>50%</FullBorderTableCell>
                    <FullBorderTableCell>50%</FullBorderTableCell>
                    <FullBorderTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations!.calculation_step
                        )[0].intrinsic_price
                      }
                    </FullBorderTableCell>
                    <FullBorderTableCell>
                      {
                        JSON.parse(
                          stock.intrinsic_value_caculations!.calculation_step
                        )[1]?.intrinsic_price
                      }
                    </FullBorderTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;
