import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';

export const EntryList = () => {
  return (
    //TODO: set drop
    <div>
      <Paper sx={{
        height: 'calc(100vh - 250px)', overflow: 'scroll',
        backgroundColor: 'transparent',
        padding: '2px 5px'
      }}>
        <List sx={{ opacity: 1 }}>
          <EntryCard/>
          <EntryCard/>
          <EntryCard/>
        </List>
      </Paper>
    </div>
  );
};
