import { EntriesState } from './EntriesProvider';

type EntriesActionType =
  | { type: '[Entries]- ActionName' }
  | { type: 'UI - Close Sidebar' }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType

): EntriesState => {
  switch (action.type) {
    /*    case '[Entries]- ActionName':
          return {
            ...state,
            sideMenuOpen: true
          };

        case 'UI - Close Sidebar':
          return {
            ...state,
            sideMenuOpen: false
          };*/

    default:
      return state;
  }

};
