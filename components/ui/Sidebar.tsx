import {
  Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography
} from '@mui/material';
import {
  InboxOutlined, MailOutlineOutlined
} from '@mui/icons-material';
import { UIContext } from '../../context/ui';
import { useContext } from 'react';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {

  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);


  return (
    <Drawer
      anchor={'left'}
      open={sideMenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant={'h4'}>
            Menu
          </Typography>
          <List>
            {
              menuItems.map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {
                      index % 2 === 0
                      ? <InboxOutlined/>
                      : <MailOutlineOutlined/>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItem>
              ))
            }
          </List>

          <Divider/>

          <List>
            {
              menuItems.map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {
                      index % 2 === 0
                      ? <InboxOutlined/>
                      : <MailOutlineOutlined/>
                    }
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
