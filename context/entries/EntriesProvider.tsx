import { FC, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const UI_initial_state: EntriesState = {
  entries: []
};

// @ts-ignore
export const EntriesProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, UI_initial_state);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      status: 'pending',
      createAt: Date.now(),
      description,
    };

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {

    dispatch({ type: '[Entry] Update-Entry', payload: entry });

  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Refresh-Data', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);


  return (
    <EntriesContext.Provider value={{
      ...state,
      updateEntry,
      addNewEntry
    }}>
      {children}`9
    </EntriesContext.Provider>
  );
};
