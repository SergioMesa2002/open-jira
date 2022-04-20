import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';


export interface UIState {
  isAddingEntry: boolean;
  sideMenuOpen: boolean;
}

const UI_initial_state: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false
};

// @ts-ignore
export const UIProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_initial_state);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
  };

  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}>
      {children}
    </UIContext.Provider>
  );
};
