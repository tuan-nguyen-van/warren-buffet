import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '../app/redux-hooks';
import { selectOpen } from '../Content/sideBarSlice';

type Props = {
  text: string;
  icon: JSX.Element;
};

const SideBarItem = ({ text, icon }: Props) => {
  const sideBarOpen = useAppSelector(selectOpen);

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: sideBarOpen ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sideBarOpen ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: sideBarOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default React.memo(SideBarItem);
