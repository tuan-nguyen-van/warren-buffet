import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../app/redux-hooks';
import { toggle } from '../Content/sideBarSlice';

const MenuButton = () => {
  const dispatch = useAppDispatch();
  return (
    <MenuIcon
      className="menu-icon"
      onClick={() => dispatch(toggle())}
      sx={{ zIndex: window.isMobile ? 200 : 'auto' }}
    />
  );
};

export default MenuButton;
