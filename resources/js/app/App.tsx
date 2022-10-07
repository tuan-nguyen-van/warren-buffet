import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header';
import Content from '../Content';
import axios from 'axios';
import { useAppDispatch } from './redux-hooks';
import { changeDiscountRate } from '../DiscountRate/discountSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get('/get-discount-rate')
      .then(function (response) {
        dispatch(changeDiscountRate(response.data.value));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
    </>
  );
};

export default App;
