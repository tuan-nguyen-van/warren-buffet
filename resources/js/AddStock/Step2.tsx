import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputItem from './InputItem';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type financialMetric = {
  id: number;
  name: string;
  measurement_unit: string;
};

type Props = {
  disableStep2: boolean;
};

const Step2 = ({ disableStep2 }: Props) => {
  const [financialMetrics, setFinancialMetrics] = useState<financialMetric[]>(
    []
  );
  const [year, setYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear - 12; i < currentYear; i++) {
    years.push(i);
  }

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
    <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
      <Typography
        variant="h5"
        sx={{ color: disableStep2 ? 'text.disabled' : 'inherit' }}
      >
        Step 2
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              value={year}
              label="Year"
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              variant="standard"
              disabled={disableStep2}
              sx={{ position: 'relative', mt: 2 }}
            >
              {years.map((year) => (
                <MenuItem value={year} key={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {financialMetrics.map((financialMetric) => (
          <InputItem
            key={financialMetric.id}
            label={financialMetric.name}
            unit={financialMetric.measurement_unit}
            disabled={disableStep2}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Step2;
