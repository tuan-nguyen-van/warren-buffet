import React, { useState } from 'react';
import CompanyInfo from './CompanyInfo';
import GrowthRate from './GrowthRate';
import Assumption from './Assumption';
import { useParams } from 'react-router-dom';
import Calculation from './Calculation';
import CheckTenets from './CheckTenets';

const AddStock = () => {
  const [disableStep2, setDisableStep2] = useState(true);
  const { editStockId } = useParams();
  const [stockId, setStockId] = useState(editStockId ? +editStockId : 0);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <CompanyInfo
        setDisableStep2={setDisableStep2}
        stockId={stockId}
        setStockId={setStockId}
        edit={editStockId ? true : false}
      />
      <CheckTenets />
      <GrowthRate
        disableStep2={disableStep2}
        stockId={stockId}
        edit={editStockId ? true : false}
        setDisableStep2={setDisableStep2}
      />
      <Assumption stockId={stockId} edit={editStockId ? true : false} />
      <Calculation stockId={stockId} edit={editStockId ? true : false} />
    </div>
  );
};

export default AddStock;
