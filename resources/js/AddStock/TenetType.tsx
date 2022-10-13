import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

type Props = {
  tenets: App.Tenet[];
  type: string;
  index: number;
  count: number;
};

const verticallyCenter = {
  margin: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

const TenetType = ({ tenets, type, index, count }: Props) => {
  const handleChange = (e: React.SyntheticEvent<Element, Event>) => {
    console.log((e.target as HTMLInputElement).getAttribute('name'));
  };

  const [checked] = useState(false);

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
            <React.Fragment key={tenet.id}>
              <Grid item xs={12} lg={6}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={tenet.description}
                    name={'' + tenet.id}
                    onChange={handleChange}
                    checked={checked}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Note"
                  multiline
                  rows={1}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
      {index !== count - 1 && <Divider sx={{ width: '100%', mb: 2 }} />}
    </Grid>
  );
};

export default TenetType;
