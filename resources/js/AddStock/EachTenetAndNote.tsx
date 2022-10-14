import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';

type Props = {
  key: number;
  tenet: App.Tenet;
  stockHasTenets?: App.StockHasTenet[];
};

const EachTenetAndNote = ({ tenet, stockHasTenets }: Props) => {
  const { stockId } = useAppSelector(getAddStockState);
  const [checked, setChecked] = useState(false);
  const { editStockId } = useParams();

  useEffect(() => {
    if (stockHasTenets && editStockId) {
      const $thisStockHasTenet = stockHasTenets.filter(
        (stockTenet) => stockTenet.tenet_id === tenet.id
      );
      if ($thisStockHasTenet[0] && $thisStockHasTenet[0].value) {
        setChecked(true);
      }
    }
  }, [editStockId, stockHasTenets]);

  const handleChange = (e: React.SyntheticEvent<Element, Event>) => {
    const checkBoxId = (e.target as HTMLInputElement).getAttribute('name');
    const requestData = {
      tenet_id: checkBoxId ? +checkBoxId : null,
      stock_id: stockId,
      //Opposite because the checked state did not get updated yet
      value: checked ? 0 : 1,
    };
    if (checkBoxId) {
      axios
        .post('/stock-has-tenets', requestData)
        .then(function (response) {
          console.log(response);
          setChecked(!checked);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <React.Fragment>
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
        <TextField label="Note" multiline rows={1} fullWidth sx={{ mb: 2 }} />
      </Grid>
    </React.Fragment>
  );
};

export default EachTenetAndNote;
