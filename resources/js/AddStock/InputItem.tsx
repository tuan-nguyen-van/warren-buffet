import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

type Props = {
  label: string;
  unit: string;
  disabled: boolean;
};
const InputItem = ({ label, unit, disabled }: Props) => {
  return (
    <Grid item xs={12} lg={4}>
      <TextField
        fullWidth
        label={`${label} (${unit})`}
        variant="standard"
        disabled={disabled}
      />
    </Grid>
  );
};

export default InputItem;
