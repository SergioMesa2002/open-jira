import { FC, useEffect, useReducer } from 'react';

import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack';

export interface EntriesState {
  entries: Entry[];
}

const UI_initial_state: EntriesState = {
  entries: []
};

// @ts-ignore
export const EntriesProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, UI_initial_state);

  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', {
      description
    });

    dispatch({ type: '[Entry] Add-Entry', payload: data });
  };

  const updateEntry = async ({ _id, description, status }: Entry,
    showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`,
        { description, status });
      dispatch({ type: '[Entry] Update-Entry', payload: data });


      if (showSnackbar) {
        enqueueSnackbar('Entry Updated', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });
      }

    } catch (error) {
      console.log({ error });
    }
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
      {children}
    </EntriesContext.Provider>
  );
};
