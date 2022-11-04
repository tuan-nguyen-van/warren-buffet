import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { getErrorAlertState, toggleOpen } from './errorAlertSlice';

const ErrorAlertBox = () => {
  const dispatch = useAppDispatch();
  const { open, text } = useAppSelector(getErrorAlertState);
  return (
    <Alert
      severity="error"
      className="alert-box"
      variant="filled"
      sx={{ display: open ? 'flex!important' : 'none!important' }}
    >
      <AlertTitle>
        Error
        <CloseIcon
          className="alert-close-icon"
          onClick={() => dispatch(toggleOpen())}
        />
      </AlertTitle>
      {text}
    </Alert>
  );
};

export default ErrorAlertBox;
