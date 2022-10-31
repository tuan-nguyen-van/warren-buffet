import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useAppDispatch } from '../app/redux-hooks';
import { changeMode, getMode } from '../app/lightModeSlice';
import { useAppSelector } from '../app/redux-hooks';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import useAxios from '../CustomHooks/useAxios';

type Props = {
  avatar?: boolean;
  sidebar?: boolean;
};

const RightBtnGroup = ({ avatar, sidebar }: Props) => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(getMode);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<App.User.User>();

  useEffect(() => {
    useAxios({ method: 'get', url: '/current-user' }, function ({ data }) {
      setUser(data);
    });
  }, []);

  const handleLogout = () => {
    window.location.replace('/logout');
  };

  return (
    <Box
      component="span"
      sx={{
        float: sidebar ? 'inherit' : 'right',
        mt: sidebar ? 2 : 0,
      }}
    >
      <ButtonGroup variant="outlined">
        <Button
          className={!sidebar ? 'light-mode' : 'sidebar-light-mode'}
          variant={mode === 'light' ? 'contained' : 'outlined'}
          onClick={() => dispatch(changeMode('light'))}
        >
          <LightModeIcon />
        </Button>
        <Button
          className={!sidebar ? 'dark-mode' : 'sidebar-dark-mode'}
          onClick={() => dispatch(changeMode('dark'))}
          variant={mode === 'dark' ? 'contained' : 'outlined'}
        >
          <DarkModeIcon />
        </Button>
        {avatar && (
          <>
            <Avatar
              onClick={() => setOpen(!open)}
              alt="avatar"
              src="/images/warren-buffett.png"
              className="avatar"
              id="header-avatar"
            />
            <Menu
              anchorEl={document.getElementById('header-avatar')}
              id="account-menu"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem sx={{ cursor: 'default' }}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                {user?.name}
              </MenuItem>
              <Divider />
              <MenuItem sx={{ cursor: 'default' }}>
                <ListItemIcon>
                  <EmailIcon fontSize="small" />
                </ListItemIcon>
                {user?.email}
              </MenuItem>
              <Divider />
              <MenuItem sx={{ cursor: 'default' }}>
                <ListItemIcon>
                  <ManageAccountsIcon fontSize="small" />
                </ListItemIcon>
                Role: {user?.role}
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default RightBtnGroup;
