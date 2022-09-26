import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useAppSelector } from '../app/redux-hooks';
import { selectOpen } from '../Content/sideBarSlice';
import Content from '../Content/Content';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SideBarItem from './SideBarItem';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SideBar = () => {
  const menuOpen = useAppSelector(selectOpen);
  return (
    <Box
      sx={{ display: 'flex', '& .MuiPaper-root': { top: '50px !important' } }}
    >
      <Drawer variant="permanent" open={menuOpen}>
        <List>
          <SideBarItem text="Add Stock" icon={<AddCircleIcon />} />
          <SideBarItem text="Stock List" icon={<ListAltIcon />} />
          <SideBarItem text="Discount Rate: 8%" icon={<TrendingDownIcon />} />
        </List>
        <Divider />
        <List>
          <SideBarItem text="Stock tenets" icon={<AssignmentIcon />} />
          <SideBarItem text="Financial index types" icon={<AnalyticsIcon />} />
          <SideBarItem text="Famous Quotes" icon={<FormatQuoteIcon />} />
        </List>
      </Drawer>
      <Content />
    </Box>
  );
};

export default SideBar;
