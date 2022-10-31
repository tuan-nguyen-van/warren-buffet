import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';
import useAxios from '../CustomHooks/useAxios';

type Props = {
  key: number;
  tenet: App.Tenet;
  stockHasTenets?: App.StockHasTenet[];
};

const EachTenetAndNote = ({ tenet, stockHasTenets }: Props) => {
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const [checked, setChecked] = useState(false);
  const { editStockId } = useParams();
  const [noteValue, setNoteValue] = useState('');

  useEffect(() => {
    if (stockHasTenets && editStockId) {
      const $thisStockHasTenet = stockHasTenets.filter(
        (stockTenet) => stockTenet.tenet_id === tenet.id
      );
      if ($thisStockHasTenet[0] && $thisStockHasTenet[0].value) {
        setChecked(true);
      }
      if ($thisStockHasTenet[0] && $thisStockHasTenet[0].note) {
        setNoteValue($thisStockHasTenet[0].note);
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
      useAxios(
        { method: 'post', url: '/stock-has-tenets', data: requestData },
        function (response) {
          console.log(response);
          setChecked(!checked);
        }
      );
    }
  };

  const handleFocusOut = () => {
    if (noteValue) {
      useAxios(
        { method: 'post', url: '/stock-has-tenets/note' },
        function ({ data }: { data: string }) {
          console.log(data);
        }
      );
    }
  };

  return (
    <React.Fragment>
      <Grid item xs={12} lg={6}>
        <FormControlLabel
          control={<Checkbox />}
          label={tenet.description}
          name={'' + tenet.id}
          onChange={handleChange}
          checked={checked}
          disabled={disableStep.CheckTenets}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          label="Note"
          multiline
          rows={1}
          fullWidth
          sx={{ mb: 2 }}
          disabled={disableStep.CheckTenets}
          name={'' + tenet.id}
          onBlur={handleFocusOut}
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
      </Grid>
    </React.Fragment>
  );
};

export default EachTenetAndNote;
