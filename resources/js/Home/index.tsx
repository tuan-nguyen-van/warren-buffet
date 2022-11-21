import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import orderBy from 'lodash/orderBy';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import applyAxios from '../CustomHooks/applyAxios';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const Home = () => {
  const [followedStocks, setFollowedStock] =
    useState<App.Stocks.OrderStock[]>();
  const [sortedStocks, setSortedStocks] = useState<App.Stocks.OrderStock[]>();
  const [quotes, setQuotes] = useState<App.Quotes.Data[]>();
  let quotesCount = 1;
  let stockNumber = 1;
  const [totalTenets, setTotalTenets] = useState<number>();

  useEffect(() => {
    applyAxios({ method: 'get', url: '/stocks-for-home' }, function ({ data }) {
      setTotalTenets(data.totalTenets as number);
      setFollowedStock(data.stocks as App.Stocks.StockData[]);
    });

    applyAxios({ method: 'get', url: '/quotes' }, function ({ data }) {
      setQuotes(data as App.Quotes.Data[]);
    });
  }, []);

  useEffect(() => {
    if (followedStocks) {
      for (const stock of followedStocks) {
        stock.marginOfSafetyOpt1 = marginOfSafety(
          stock,
          get1stIntrinsicPriceFromStock(stock)
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

  const get1stIntrinsicPriceFromStock = (stock: App.Stocks.OrderStock) => {
    return JSON.parse(stock.intrinsic_value_caculations!.calculation_step)[0]
      .intrinsic_price as number;
  };

  const marginOfSafety = (
    stock: App.Stocks.StockData,
    intrinsicPrice: number
  ) => {
    return Math.round(
      ((intrinsicPrice -
        stock.current_market_price *
          (1 + Number(stock.current_year_stock_dividend) / 100)) *
        100) /
        intrinsicPrice
    );
  };

  const handleUnfollow = (stockId: number, index: number) => {
    applyAxios(
      {
        method: 'patch',
        url: '/stocks/status/' + stockId,
        data: { status: 'Unfollowed' },
      },
      function () {
        sortedStocks?.splice(index, 1);
        setSortedStocks([...sortedStocks!]);
      }
    );
  };

  const buy1Get = (
    curYearStockDividend: number,
    intrinsicPrice: number,
    curMarketPrice: number
  ) =>
    (
      intrinsicPrice /
      (curMarketPrice * (1 + curYearStockDividend / 100))
    ).toFixed(2);

  const handleRenew = (stockId: number, index: number) => {
    applyAxios(
      { method: 'patch', url: '/stocks/refresh-market-price/' + stockId },
      function (response) {
        sortedStocks![index].current_market_price = response.data;
        sortedStocks![index].marginOfSafetyOpt1 = marginOfSafety(
          sortedStocks![index],
          get1stIntrinsicPriceFromStock(sortedStocks![index])
        );
        setSortedStocks([...sortedStocks!]);
      }
    );
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
      {sortedStocks &&
        sortedStocks.map((stock, index) => {
          const calculationStep: App.intrinsicValueCalculation.CalculationStep[] =
            JSON.parse(stock.intrinsic_value_caculations!.calculation_step);
          const financialMetrics = stock.financial_metrics;

          let fiveRecentYearRoea = 0;
          let fiveRecentYearsMoneyDividend = 0;
          let i = 0;
          for (; i < 5 && i < stock.financial_metrics!.length; i++) {
            fiveRecentYearRoea += Number(stock.financial_metrics![i].ROEA);
            fiveRecentYearsMoneyDividend +=
              stock.financial_metrics![i].money_dividend;
          }
          fiveRecentYearRoea = +(fiveRecentYearRoea / i).toFixed(1);
          fiveRecentYearsMoneyDividend = Math.round(
            fiveRecentYearsMoneyDividend / i
          );
          return (
            <Card className="h-stock-card" key={stock.id}>
              <CardContent sx={{ position: 'relative' }}>
                <Box component="div" sx={{ textAlign: 'left', mt: 1, mr: 4 }}>
                  <Box component="span" className="h-stock-number">
                    <span>{stockNumber++}</span>
                  </Box>
                  <Box component="span" className="h-company-name">
                    {stock.ticker_symbol} | {stock.company_name}
                  </Box>
                </Box>
                <Box component={'div'} className="h-card-btn-group">
                  <Link
                    to={'/edit-stock/' + stock.id}
                    className="color-inherit"
                  >
                    <EditIcon />
                  </Link>

                  <BookmarkRemoveIcon
                    onClick={() => handleUnfollow(stock.id, index)}
                  />
                </Box>
                <Grid container sx={{ mt: 2 }}>
                  <Grid item xs={6} lg={3} className="h-first-card-row">
                    <Box component="span" className="h-stock-price">
                      {stock.current_market_price}
                    </Box>

                    <AutorenewIcon
                      sx={{ color: 'rgb(114, 193, 254)', cursor: 'pointer' }}
                      onClick={() => handleRenew(stock.id, index)}
                    />

                    <Box component="div" sx={{ mt: 1 }}>
                      {+stock.current_year_stock_dividend !== 0
                        ? 'Current Year Stock Dividend: ' +
                          parseFloat(stock.current_year_stock_dividend) +
                          '%'
                        : ''}
                    </Box>
                  </Grid>
                  <Grid item xs={6} lg={3} className="h-first-card-row">
                    Margin Of Safety
                    <br />
                    {stock.marginOfSafetyOpt1}%{' '}
                    {calculationStep[1]?.intrinsic_price &&
                      '| ' +
                        marginOfSafety(
                          stock,
                          calculationStep[1]?.intrinsic_price
                        ) +
                        '%'}
                    <Box component="div" sx={{ mt: 1 }}>
                      Buy 1 Get
                      <br />
                      {buy1Get(
                        +stock.current_year_stock_dividend,
                        calculationStep[0].intrinsic_price,
                        stock.current_market_price
                      )}{' '}
                      {calculationStep[1]?.intrinsic_price &&
                        '| ' +
                          buy1Get(
                            +stock.current_year_stock_dividend,
                            calculationStep[1].intrinsic_price,
                            stock.current_market_price
                          )}
                    </Box>
                  </Grid>
                  <Grid item xs={6} lg={3} className="h-first-card-row">
                    PE
                    <br />
                    {calculationStep[0].total_pe}{' '}
                    {calculationStep[1] ? '|' : ''}{' '}
                    {calculationStep[1]?.total_pe}
                  </Grid>
                  <Grid item xs={6} lg={3} className="h-first-card-row">
                    Intrinsic Price
                    <br />
                    {calculationStep[0].intrinsic_price}{' '}
                    {calculationStep[1] ? '|' : ''}{' '}
                    {calculationStep[1]?.intrinsic_price}
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2.5 }} />
                <Grid container>
                  <Grid item xs={12}>
                    Growth Assumption
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box component="div">Option 1</Box>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Box component="div" sx={{ textAlign: 'left', mt: 2 }}>
                          Next 10 years:{' '}
                          {stock.growth_assumptions![0].next_10_years}%
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box component="div" sx={{ textAlign: 'left', mt: 2 }}>
                          Next 10 - 20 years:{' '}
                          {stock.growth_assumptions![0].next_10_to_20_years}%
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box component="div">Option 2</Box>
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Box component="div" sx={{ textAlign: 'left', mt: 2 }}>
                          Next 10 years:{' '}
                          {stock.growth_assumptions![1]?.next_10_years}%
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box component="div" sx={{ textAlign: 'left', mt: 2 }}>
                          Next 10 - 20 years:{' '}
                          {stock.growth_assumptions![1]?.next_10_to_20_years}%
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2.5 }} />
                <Grid container>
                  <Grid item xs={12} md={3} className="h-card-last-row">
                    Tenets: {stock.stock_has_tenets!.length + '/' + totalTenets}
                  </Grid>
                  <Grid item xs={12} md={3} className="h-card-last-row">
                    Dividend Paid:{' '}
                    {
                      financialMetrics!.filter((value) => value.money_dividend)
                        .length
                    }
                    /{stock.financial_metrics!.length} years
                  </Grid>
                  <Grid item xs={12} md={3} className="h-card-last-row">
                    5 years ROEA: {fiveRecentYearRoea}%
                  </Grid>
                  <Grid item xs={12} md={3} className="h-card-last-row">
                    5 years average dividend: {fiveRecentYearsMoneyDividend}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
    </Box>
  );
};

export default Home;
