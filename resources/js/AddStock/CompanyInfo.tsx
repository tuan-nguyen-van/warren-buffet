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

  //Retrieve information for editStockId
  useEffect(() => {
    if (editStockId && stockId) {
      applyAxios(
        { method: 'get', url: '/stocks/' + stockId },
        function (response) {
          const data: App.Stocks.StockData = response.data;
          setTickerSymbol(data.ticker_symbol);
          setCompanyName(data.company_name);
          setWebsite(data.website);
          setCrawlLink(data.vietstock_crawl_link);
          dispatch(changeDisableStep(['CompanyInfo', true]));
        }
      );
    }
  }, [stockId, editStockId, dispatch]);

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

      <Grid container spacing={2}>
        <Grid item xs={6} lg={3}>
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
        <Grid item xs={12} lg={7}>
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
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
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
        <Grid item xs={12} lg={2} sx={{ textAlign: 'center' }}>
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
