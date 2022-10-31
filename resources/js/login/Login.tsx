import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useAxios from '../CustomHooks/useAxios';

interface Errors {
  [key: string]: string;
}

const Login = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    rememberMe: false,
    signInAsGuest: false,
  });
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });
  const [serverErrors, setServerErrors] = useState<Errors>();
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const handleSignIn = () => {
    // If the email or password does not have value then show error inside input.
    const errors = { ...inputErrors };
    if (!loginState.email) errors.email = true;
    if (!loginState.password) errors.password = true;
    setInputErrors(errors);

    if (!errors.email && !errors.password) {
      useAxios(
        {
          method: 'post',
          url: '/login',
          data: {
            email: loginState.email,
            password: loginState.password,
            remember: loginState.rememberMe,
          },
        },
        function () {
          window.previousURL!.includes('/login')
            ? window.location.replace('/')
            : window.location.replace(window.previousURL!);
        },
        function (error) {
          setServerErrors(error.response.data.errors);
        }
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
        variant="outlined"
        sx={{ maxWidth: 400, mx: 'auto', mt: 10, textAlign: 'center' }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            Sign In
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            value={
              loginState.signInAsGuest ? 'guest@gmail.com' : loginState.email
            }
            onChange={(e) =>
              setLoginState({
                ...loginState,
                email: e.target.value,
              })
            }
            error={inputErrors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            type="password"
            value={
              loginState.signInAsGuest ? 'Password!@#' : loginState.password
            }
            onChange={(e) =>
              setLoginState({
                ...loginState,
                password: e.target.value,
              })
            }
            error={inputErrors.password}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 2, ml: -7 }}
            checked={loginState.signInAsGuest ? false : loginState.rememberMe}
            onChange={() =>
              setLoginState({
                ...loginState,
                rememberMe: !loginState.rememberMe,
              })
            }
            disabled={loginState.signInAsGuest}
          />
          <Button
            variant={loginState.signInAsGuest ? 'contained' : 'outlined'}
            sx={{ mt: 2, float: 'right' }}
            onClick={() => {
              setLoginState({
                ...loginState,
                signInAsGuest: true,
                email: 'guest@gmail.com',
                password: 'Password!@#',
              });
            }}
          >
            Sign in as Guest
          </Button>
          {serverErrors &&
            Object.keys(serverErrors).map((error, index) => (
              <Typography
                variant="body1"
                gutterBottom
                sx={{ textAlign: 'left', color: 'error.main' }}
                key={index}
              >
                {error + ' : ' + serverErrors[error]}
              </Typography>
            ))}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            sx={{ mb: 2 }}
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default Login;
