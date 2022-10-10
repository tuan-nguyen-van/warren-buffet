import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useParams } from 'react-router-dom';
import Step4 from './Step4';

const AddStock = () => {
  const [disableStep2, setDisableStep2] = useState(true);
  const { editStockId } = useParams();
  const [stockId, setStockId] = useState(editStockId ? +editStockId : 0);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Step1
        setDisableStep2={setDisableStep2}
        stockId={stockId}
        setStockId={setStockId}
        edit={editStockId ? true : false}
      />
      <Step2
        disableStep2={disableStep2}
        stockId={stockId}
        edit={editStockId ? true : false}
        setDisableStep2={setDisableStep2}
      />
      <Step3 stockId={stockId} edit={editStockId ? true : false} />
      <Step4 stockId={stockId} edit={editStockId ? true : false} />
    </div>
  );
};

export default AddStock;
