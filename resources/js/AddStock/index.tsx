import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const AddStock = () => {
  const [disableStep2, setDisableStep2] = useState(true);
  const [stockId, setStockId] = useState(0);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Step1
        setDisableStep2={setDisableStep2}
        stockId={stockId}
        setStockId={setStockId}
      />
      <Step2 disableStep2={disableStep2} stockId={stockId} />
      <Step3 />
    </div>
  );
};

export default AddStock;
