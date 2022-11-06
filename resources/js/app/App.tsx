import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Content from '../Content';
import { useAppDispatch } from './redux-hooks';
import { changeDiscountRate } from '../DiscountRate/discountSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { changeMode, getMode } from './lightModeSlice';
import { useAppSelector } from './redux-hooks';
import AlertError from '../Guest/AlertError';
import applyAxios from '../CustomHooks/applyAxios';
import ErrorAlertBox from '../Error/ErrorAlertBox';

const App = () => {
  const dispatch = useAppDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    dispatch(changeMode(prefersDarkMode ? 'dark' : 'light'));
  }, [prefersDarkMode, dispatch]);
  const { mode } = useAppSelector(getMode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode === 'dark' ? 'dark' : 'light',
        },
      }),
    [mode]
  );

  useEffect(() => {
    applyAxios(
      { method: 'get', url: '/get-discount-rate' },
      function (response) {
        dispatch(changeDiscountRate(response.data.value));
      }
    );
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertError />
      <ErrorAlertBox />
      <Content />
    </ThemeProvider>
  );
};

export default App;
