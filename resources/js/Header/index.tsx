import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuButton from '../components/MenuButton';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import RightBtnGroup from './RightBtnGroup';
import useAxios from '../CustomHooks/useAxios';

const Header: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [stocksData, setStocksData] = useState<App.Stocks.SearchStock[]>([]);
  const loading = open && stocksData.length === 0;
  const [value, setValue] = React.useState<App.Stocks.SearchStock | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    (async () => {
      setTimeout(() => {
        useAxios({ method: 'get', url: '/stocks-search' }, function ({ data }) {
          setStocksData(data as App.Stocks.SearchStock[]);
        });
      }, 1000);
    })();
  }, [loading]);

  useEffect(() => {
    if (value) {
      navigate('/edit-stock/' + value.id);
      location.reload();
    }
  }, [value]);

  return (
    <Grid container spacing={2} sx={{ position: 'relative' }}>
      <Grid item xs={9} sx={{ paddingLeft: '0px !important' }}>
        <Stack direction="row">
          {window.isMobile && <MenuButton />}
          <Autocomplete
            size="small"
            fullWidth
            id="asynchronous-demo"
            sx={{
              ml: window.isMobile ? 1 : 2,
              maxWidth: 600,
            }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(option: App.Stocks.SearchStock, value) =>
              option.title === value.title
            }
            getOptionLabel={(option) => option.title}
            options={stocksData}
            loading={loading}
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Stock"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <RightBtnGroup avatar={true} />
      </Grid>
    </Grid>
  );
};

export default Header;
