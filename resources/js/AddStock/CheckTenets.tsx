import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TenetType from './TenetType';
import { useAppSelector } from '../app/redux-hooks';
import { getAddStockState } from './addStockSlice';
import { useParams } from 'react-router-dom';
import applyAxios from '../CustomHooks/applyAxios';

const CheckTenets = () => {
  const [tenets, setTenets] = useState<App.Tenets>();
  const [tenetTypes, setTenetTypes] = useState<App.TenetTypes>();
  const { stockId, disableStep } = useAppSelector(getAddStockState);
  const [stockHasTenets, setStockHasTenets] = useState<App.StockHasTenet[]>();
  const { editStockId } = useParams();

  useEffect(() => {
    applyAxios({ method: 'get', url: '/tenets' }, function (response) {
      const data: App.Tenets = response.data;
      setTenets(data);
    });

    applyAxios({ method: 'get', url: '/tenet-types' }, function (response) {
      const data: App.TenetTypes = response.data;
      setTenetTypes(data);
    });
  }, []);

  useEffect(() => {
    if (stockId && editStockId) {
      applyAxios(
        { method: 'get', url: '/stock-has-tenets/' + editStockId },
        function (response) {
          const data: App.StockHasTenet[] = response.data;
          setStockHasTenets(data);
        }
      );
    }
  }, [editStockId, stockId]);

  return (
    <Box
      className={disableStep.CheckTenets ? 'disabledText' : ''}
      sx={{
        flexGrow: 1,
        textAlign: 'left',
        mb: 7,
        mt: 4,
      }}
    >
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
