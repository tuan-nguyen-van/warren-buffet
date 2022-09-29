import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputItem from './InputItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';

type financialMetric = {
  id: number;
  name: string;
  measurement_unit: string;
};

const AddStock = () => {
  const [financialMetrics, setFinancialMetrics] = useState<financialMetric[]>(
    []
  );
  useEffect(() => {
    axios
      .get('/financial-metrics')
      .then(function (response) {
        // handle success
        setFinancialMetrics(response.data);
        console.log(financialMetrics);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h4">Add Stock</Typography>
      <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7 }}>
        <Typography variant="h5">Step 1</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={3}>
            <TextField fullWidth label="Ticker Symbol" variant="standard" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <TextField fullWidth label="Company Name" variant="standard" />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TextField fullWidth label="Website" variant="standard" />
          </Grid>
          <Grid item xs={12} lg={2} sx={{ textAlign: 'center' }}>
            <IconButton color="primary" size="large">
              <AddBoxIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
        <Typography variant="h5" sx={{ color: 'text.disabled' }}>
          Step 2
        </Typography>
        <Grid container spacing={2}>
          {financialMetrics.map((financialMetric) => (
            <InputItem
              key={financialMetric.id}
              label={financialMetric.name}
              unit={financialMetric.measurement_unit}
              disabled
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AddStock;
