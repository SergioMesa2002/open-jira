import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '../../interfaces';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries';

interface EntryListProps {
  status: EntryStatus;
}

export const EntryList: FC<EntryListProps> = ({ status }) => {

  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
      () => entries.filter(entry => entry.status === status), [entries]
    )
  ;

  return (
    //TODO: set drop
    <div>
      <Paper sx={{
        height: 'calc(100vh - 250px)', overflow: 'scroll',
        backgroundColor: 'transparent',
        padding: '2px 5px'
      }}>
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(
              entry => <EntryCard key={entry._id} entry={entry}/>)
          }
        </List>
      </Paper>
    </div>
  );
};
