import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Typography from '@mui/material/Typography';

const AddStock = () => {
  const [disableStep2, setDisableStep2] = useState(true);

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h4">Add Stock</Typography>
      <Step1 setDisableStep2={setDisableStep2} />
      <Step2 disableStep2={disableStep2} />
    </div>
  );
};

export default AddStock;
