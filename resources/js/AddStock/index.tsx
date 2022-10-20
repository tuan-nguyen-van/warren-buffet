import React, { useEffect } from 'react';
import CompanyInfo from './CompanyInfo';
import GrowthRate from './GrowthRate';
import Assumption from './Assumption';
import { useParams } from 'react-router-dom';
import Calculation from './Calculation';
import CheckTenets from './CheckTenets';
import { useAppDispatch } from '../app/redux-hooks';
import { changeStockId, changeDisableStep } from './addStockSlice';

const AddStock = () => {
  const { editStockId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (editStockId) {
      dispatch(changeStockId(+editStockId));
      dispatch(changeDisableStep(['CheckTenets', false]));
      dispatch(changeDisableStep(['GrowthRate', false]));
      dispatch(changeDisableStep(['Assumption', false]));
      dispatch(changeDisableStep(['Calculation', false]));
    } else {
      dispatch(changeStockId(undefined));
      dispatch(changeDisableStep(['CompanyInfo', false]));
      dispatch(changeDisableStep(['CheckTenets', true]));
      dispatch(changeDisableStep(['GrowthRate', true]));
      dispatch(changeDisableStep(['Assumption', true]));
      dispatch(changeDisableStep(['Calculation', true]));
    }
  }, []);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <CompanyInfo />
      <CheckTenets />
      <GrowthRate />
      <Assumption />
      <Calculation />
    </div>
  );
};

export default AddStock;
