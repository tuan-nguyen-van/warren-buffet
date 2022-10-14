import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import TenetType from './TenetType';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';

const CheckTenets = () => {
  const [tenets, setTenets] = useState<App.Tenets>();
  const [tenetTypes, setTenetTypes] = useState<App.TenetTypes>();
  const { stockId } = useAppSelector(getAddStockState);
  const [stockHasTenets, setStockHasTenets] = useState<App.StockHasTenet[]>();
  const { editStockId } = useParams();

  useEffect(() => {
    axios
      .get('/tenets')
      .then(function (response) {
        const data: App.Tenets = response.data;
        setTenets(data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('/tenet-types')
      .then(function (response) {
        const data: App.TenetTypes = response.data;
        setTenetTypes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (stockId && editStockId) {
      axios
        .get('/stock-has-tenets/' + stockId)
        .then(function (response) {
          const data: App.StockHasTenet[] = response.data;
          setStockHasTenets(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [editStockId, stockId]);

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 }}>
      <Divider>
        <Typography variant="h5">Step 2: Check Tenets</Typography>
      </Divider>

      {tenets &&
        Object.keys(tenets).map((tenetType, i) => (
          <TenetType
            tenets={tenets[tenetType as keyof App.TenetTypes]}
            type={
              tenetTypes ? tenetTypes[tenetType as keyof App.TenetTypes] : ''
            }
            index={i}
            count={Object.keys(tenets).length}
            key={i}
            stockHasTenets={stockHasTenets}
          />
        ))}
    </Box>
  );
};

export default CheckTenets;
