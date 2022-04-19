import { FC, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';

export interface EntriesState {
  entries: [];
}

const UI_initial_state: EntriesState = {
  entries: []
};

// @ts-ignore
export const UIProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, UI_initial_state);

  return (
    <EntriesContext.Provider value={{
      ...state,
      entries: []
    }}>
      {children}
    </EntriesContext.Provider>
  );
};
