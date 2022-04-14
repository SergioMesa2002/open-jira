import { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const NavBar:FC = () => {
  return (
    <AppBar position={'sticky'} elevation={0}>
      <Toolbar>
        <IconButton size={'large'} edge={'start'}>
          <MenuOutlined/>
        </IconButton>
        <Typography variant={'h6'}>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
