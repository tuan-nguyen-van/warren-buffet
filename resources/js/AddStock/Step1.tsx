import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  setDisableStep2: React.Dispatch<React.SetStateAction<boolean>>;
  stockId: number;
  setStockId: React.Dispatch<React.SetStateAction<number>>;
};

const Step1 = ({ setDisableStep2, stockId, setStockId }: Props) => {
  const [tickerSymbol, setTickerSymbol] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [disableStep1, setDisableStep1] = useState(false);

  const handleAddStock = () => {
    if (!stockId) {
      axios
        .post('/stocks', {
          ticker_symbol: tickerSymbol,
          company_name: companyName,
          website: website,
        })
        .then(function (response) {
          setDisableStep1(true);
          setDisableStep2(false);
          setStockId(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .put('/stocks/' + stockId, {
          ticker_symbol: tickerSymbol,
          company_name: companyName,
          website: website,
        })
        .then(function () {
          setDisableStep1(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
      <Typography variant="h5">Step 1: Company Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} lg={3}>
          <TextField
            fullWidth
            label="Ticker Symbol"
            variant="standard"
            value={tickerSymbol}
            onChange={(e) => setTickerSymbol(e.target.value)}
            disabled={disableStep1}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Company Name"
            variant="standard"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={disableStep1}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            label="Website"
            variant="standard"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            disabled={disableStep1}
          />
        </Grid>
        <Grid item xs={12} lg={2} sx={{ textAlign: 'center' }}>
          {disableStep1 ? (
            <IconButton
              color="primary"
              size="large"
              onClick={() => setDisableStep1(false)}
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

export default Step1;
