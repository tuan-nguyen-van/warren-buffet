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
import TableSortLabel from '@mui/material/TableSortLabel';
import orderBy from 'lodash/orderBy';

const Home = () => {
  const [followedStocks, setFollowedStock] =
    useState<App.Stocks.OrderStock[]>();
  const [sortedStocks, setSortedStocks] = useState<App.Stocks.OrderStock[]>();
  const [quotes, setQuotes] = useState<App.Quotes.Data[]>();
  let quotesCount = 1;
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

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

  useEffect(() => {
    if (followedStocks) {
      for (const stock of followedStocks) {
        const calculationStep: App.intrinsicValueCalculation.CalculationStep[] =
          JSON.parse(stock.intrinsic_value_caculations!.calculation_step);
        stock.marginOfSafetyOpt1 = marginOfSafety(
          stock,
          calculationStep[0].intrinsic_price
        );
      }
      const unsortedStocks = [...followedStocks];
      const newSortedStocks = orderBy(
        unsortedStocks,
        ['marginOfSafetyOpt1'],
        ['desc']
      );
      setSortedStocks([...newSortedStocks]);
    }
  }, [followedStocks]);

  const marginOfSafety = (
    stock: App.Stocks.StockData,
    intrinsicPrice: number
  ) => {
    return Math.round(
      ((intrinsicPrice - stock.current_market_price) * 100) / intrinsicPrice
    );
  };

  const handleSort = () => {
    const newSortedStocks = orderBy(
      sortedStocks,
      ['marginOfSafetyOpt1'],
      [order === 'desc' ? 'asc' : 'desc']
    );
    setOrder(order === 'desc' ? 'asc' : 'desc');
    setSortedStocks([...newSortedStocks]);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 3 }}>
      <Paper
        elevation={5}
        sx={{ p: 1.5, fontSize: '14px', mt: 2, textAlign: 'left' }}
        component="div"
      >
        {quotes?.map((quote) => (
          <React.Fragment key={quote.id}>
            <Box component="span" key={quote.id} sx={{ lineHeight: 2 }}>
              {quotesCount++}. {quote.description} - {quote.author} -{' '}
            </Box>
            <br />
          </React.Fragment>
        ))}
      </Paper>
      <Box sx={{ mt: 5 }}>
        <Paper
          elevation={5}
          sx={{ p: 1.5, fontSize: '18px', mt: 5 }}
          component="span"
        >
          Followed Stocks
        </Paper>
        <Paper sx={{ width: '100%' }}></Paper>

        <TableContainer sx={{ maxHeight: 600, mt: 2 }}>
          <Table stickyHeader sx={{ borderCollapse: 'collapse' }}>
            <TableHead>
              <TableRow>
                <FullBorderTableCell align="center" colSpan={2}>
                  Details
                </FullBorderTableCell>
                <FullBorderTableCell
                  align="center"
                  colSpan={2}
                  sortDirection="asc"
                >
                  <TableSortLabel
                    active={true}
                    direction={order}
                    onClick={handleSort}
                  >
                    Margin of safety (%)
                  </TableSortLabel>
                </FullBorderTableCell>
                <FullBorderTableCell align="center" colSpan={2}>
                  PE
                </FullBorderTableCell>
                <FullBorderTableCell align="center" colSpan={2}>
                  Intrinsic Price
                </FullBorderTableCell>
              </TableRow>
              <TableRow>
                <FullBorderTableCell>Symbol</FullBorderTableCell>
                <FullBorderTableCell>Market Price</FullBorderTableCell>
                <FullBorderTableCell>Opt1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
                <FullBorderTableCell>Opt1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
                <FullBorderTableCell>Opt1</FullBorderTableCell>
                <FullBorderTableCell>Opt2</FullBorderTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedStocks &&
                sortedStocks.map((stock) => {
                  const calculationStep: App.intrinsicValueCalculation.CalculationStep[] =
                    JSON.parse(
                      stock.intrinsic_value_caculations!.calculation_step
                    );
                  return (
                    <TableRow key={stock.id}>
                      <FullBorderTableCell>
                        <Link to={`/edit-stock/${stock.id}`}>
                          {stock.ticker_symbol}
                        </Link>
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {stock.current_market_price}
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {stock.marginOfSafetyOpt1}
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {calculationStep[1]?.intrinsic_price &&
                          marginOfSafety(
                            stock,
                            calculationStep[1]?.intrinsic_price
                          )}
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {calculationStep[0].total_pe}
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {calculationStep[1]?.total_pe}
                      </FullBorderTableCell>

                      <FullBorderTableCell>
                        {calculationStep[0].intrinsic_price}
                      </FullBorderTableCell>
                      <FullBorderTableCell>
                        {calculationStep[1]?.intrinsic_price}
                      </FullBorderTableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;
