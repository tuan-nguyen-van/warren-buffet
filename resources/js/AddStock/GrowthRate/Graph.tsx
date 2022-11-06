import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Label,
} from 'recharts';
import applyAxios from '../../CustomHooks/applyAxios';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/redux-hooks';
import { getAddStockState } from '../addStockSlice';
import { GrowthRateData } from './YearData';
import { getMode } from '../../app/lightModeSlice';

type Props = {
  graphData: GrowthRateData | undefined;
  setGraphData: React.Dispatch<
    React.SetStateAction<GrowthRateData | undefined>
  >;
};

const Graph = ({ graphData, setGraphData }: Props) => {
  const { editStockId } = useParams();
  const { stockId } = useAppSelector(getAddStockState);
  const { mode } = useAppSelector(getMode);
  useEffect(() => {
    if (stockId && editStockId) {
      applyAxios(
        { method: 'get', url: '/calculated-growth-rates/' + stockId },
        function (response) {
          setGraphData(response.data);
        }
      );
    }
  }, [stockId, editStockId, setGraphData]);

  const labelTextColor = () => {
    return mode === 'dark' ? 'rgb(255,255,255,0.7)' : 'rgb(0,0,0,0.7)';
  };

  return (
    <>
      {graphData && (
        <Box component="div" sx={{ textAlign: 'left', mt: 4 }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={graphData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="year" />
              <YAxis dataKey="percent">
                <Label
                  value="%"
                  position="insideTopLeft"
                  fill={labelTextColor()}
                />
              </YAxis>
              <Bar dataKey="percent" fill="#8884d8">
                <LabelList
                  dataKey="percent"
                  position="top"
                  fill={labelTextColor()}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      )}
    </>
  );
};

export default React.memo(Graph);
