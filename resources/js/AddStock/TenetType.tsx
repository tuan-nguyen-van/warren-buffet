import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import EachTenetAndNote from './EachTenetAndNote';

type Props = {
  tenets: App.Tenet[];
  type: string;
  index: number;
  count: number;
  stockHasTenets?: App.StockHasTenet[];
};

const verticallyCenter = {
  margin: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

const TenetType = ({ tenets, type, index, count, stockHasTenets }: Props) => {
  return (
    <Grid container>
      <Grid item xs={2} sx={{ position: 'relative' }}>
        <Typography variant="body1" sx={verticallyCenter}>
          {type}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Grid container>
          {tenets.map((tenet) => (
            <EachTenetAndNote
              key={tenet.id}
              tenet={tenet}
              stockHasTenets={stockHasTenets}
            />
          ))}
        </Grid>
      </Grid>
      {index !== count - 1 && <Divider sx={{ width: '100%', mb: 2 }} />}
    </Grid>
  );
};

export default TenetType;
