import React, { useEffect, useState } from 'react';
import CompanyInfo from './CompanyInfo';
import GrowthRate from './GrowthRate';
import Assumption from './Assumption';
import { useParams } from 'react-router-dom';
import Calculation from './Calculation';
import CheckTenets from './CheckTenets';
import { useAppDispatch } from '../app/redux-hooks';
import { changeStockId } from './addStockSlice';

const AddStock = () => {
  const [disableStep2, setDisableStep2] = useState(true);
  const { editStockId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editStockId) {
      dispatch(changeStockId(+editStockId));
    } else {
      dispatch(changeStockId(undefined));
    }
  }, []);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <CompanyInfo setDisableStep2={setDisableStep2} />
      <CheckTenets />
      <GrowthRate
        disableStep2={disableStep2}
        setDisableStep2={setDisableStep2}
      />
      <Assumption />
      <Calculation />
    </div>
  );
};

export default AddStock;
