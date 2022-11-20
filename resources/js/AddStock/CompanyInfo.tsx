import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import { useAppSelector, useAppDispatch } from '../app/redux-hooks';
import {
  getAddStockState,
  changeStockId,
  changeDisableStep,
} from './addStockSlice';
import { useParams } from 'react-router-dom';
import applyAxios from '../CustomHooks/applyAxios';

const CompanyInfo = () => {
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const [tickerSymbol, setTickerSymbol] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const dispatch = useAppDispatch();
  const { editStockId } = useParams();
  const [crawlLink, setCrawlLink] = useState('');
  const [inputErrors, setInputErrors] =
    useState<App.AddStock.CompanyInfoErrors>();
  const [curYearStockDividend, setCurYearStockDividend] = useState(0);
  const [stockNote, setStockNote] = useState('');

  //Retrieve information for editStockId
  useEffect(() => {
    if (editStockId) {
      applyAxios(
        { method: 'get', url: '/stocks/' + editStockId },
        function (response) {
          const data: App.Stocks.StockData = response.data;
          setTickerSymbol(data.ticker_symbol);
          setCompanyName(data.company_name);
          setWebsite(data.website);
          setCrawlLink(data.vietstock_crawl_link);
          setCurYearStockDividend(
            parseFloat(data.current_year_stock_dividend) || 0
          );
          setStockNote(data.stock_note);
          dispatch(changeDisableStep(['CompanyInfo', true]));
        }
      );
    }
  }, [editStockId, dispatch]);

  const handleAddStock = () => {
    if (!stockId) {
      applyAxios(
        {
          method: 'post',
          url: '/stocks',
          data: {
            ticker_symbol: tickerSymbol.toUpperCase(),
            company_name: companyName,
            website: website,
            vietstock_crawl_link: crawlLink,
            current_year_stock_dividend: curYearStockDividend,
            stock_note: stockNote,
          },
        },
        function (response) {
          dispatch(changeDisableStep(['CompanyInfo', true]));
          dispatch(changeDisableStep(['CheckTenets', false]));
          dispatch(changeDisableStep(['GrowthRate', false]));
          dispatch(changeStockId(response.data as number));
          setInputErrors(undefined);
        },
        function (error) {
          if (error.response.data.errors) {
            setInputErrors(error.response.data.errors);
          }
        }
      );
    } else {
      applyAxios(
        {
          method: 'put',
          url: '/stocks/' + stockId,
          data: {
            ticker_symbol: tickerSymbol,
            company_name: companyName,
            website: website,
            vietstock_crawl_link: crawlLink,
            current_year_stock_dividend: curYearStockDividend,
            stock_note: stockNote,
          },
        },
        function () {
          dispatch(changeDisableStep(['CompanyInfo', true]));
        }
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 }}>
      <Divider>
        <Typography variant="h5">Step 1: Company Information</Typography>
      </Divider>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={3}>
          <TextField
            fullWidth
            label="Ticker Symbol"
            variant="standard"
            value={tickerSymbol}
            onChange={(e) => setTickerSymbol(e.target.value)}
            disabled={disableStep.CompanyInfo}
            error={!!inputErrors?.ticker_symbol}
            helperText={
              inputErrors?.ticker_symbol ? inputErrors?.ticker_symbol[0] : ''
            }
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <TextField
            fullWidth
            label="Company Name"
            variant="standard"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={disableStep.CompanyInfo}
            error={!!inputErrors?.company_name}
            helperText={
              inputErrors?.company_name ? inputErrors?.company_name[0] : ''
            }
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Current Year Stock Dividend (%)"
            variant="standard"
            value={curYearStockDividend}
            onChange={(e) => setCurYearStockDividend(+e.target.value)}
            disabled={disableStep.CompanyInfo}
            type="number"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Website"
            variant="standard"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            disabled={disableStep.CompanyInfo}
            error={!!inputErrors?.website}
            helperText={inputErrors?.website ? inputErrors?.website[0] : ''}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Vietstock crawl link"
            variant="standard"
            value={crawlLink}
            onChange={(e) => setCrawlLink(e.target.value)}
            disabled={disableStep.CompanyInfo}
            error={!!inputErrors?.vietstock_crawl_link}
            helperText={
              inputErrors?.vietstock_crawl_link
                ? inputErrors?.vietstock_crawl_link[0]
                : ''
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} lg={12}>
          <TextField
            label="Stock Note"
            multiline
            rows={3}
            fullWidth
            value={stockNote}
            onChange={(e) => setStockNote(e.target.value)}
            disabled={disableStep.CompanyInfo}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={12} sx={{ textAlign: 'center' }}>
          {disableStep.CompanyInfo ? (
            <IconButton
              color="primary"
              size="large"
              onClick={() =>
                dispatch(changeDisableStep(['CompanyInfo', false]))
              }
            >
              <EditIcon sx={{ fontSize: 50 }} />
            </IconButton>
          ) : (
            <IconButton color="primary" size="large" onClick={handleAddStock}>
              <AddBoxIcon sx={{ fontSize: 50 }} />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyInfo;
