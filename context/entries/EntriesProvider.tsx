import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const UI_initial_state: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'In-Progress: se distraerá con el contenido del texto de un sitio mientras que mira su diseño.',
      status: 'in-progress',
      createAt: Date.now()-1000000,
    },
    {
      _id: uuidv4(),
      description: 'Finished: Es un hecho establecido hace demasiado tiempo que un lector.',
      status: 'finished',
      createAt: Date.now() - 100000,
    }
  ]
};

// @ts-ignore
export const EntriesProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, UI_initial_state);

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      {children}
    </EntriesContext.Provider>
  );
};
