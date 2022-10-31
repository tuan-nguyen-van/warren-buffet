import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';

const AlertError = () => {
  return (
    <Alert
      severity="error"
      className="guest-action-alert"
      variant="filled"
      sx={{ display: 'none', zIndex: '9999' }}
      id="guest-alert-box"
    >
      <AlertTitle>
        Error
        <CloseIcon
          sx={{ float: 'right', cursor: 'pointer' }}
          onClick={() => {
            document.getElementById('guest-alert-box')!.style.display = 'none';
          }}
        />
      </AlertTitle>
      Guest is not allowed to perform this action!
    </Alert>
  );
};

export default AlertError;
