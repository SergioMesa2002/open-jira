import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';


export interface UIState {
  isAddingEntry: boolean;
  sideMenuOpen: boolean;
  isDragging: boolean;
}

const UI_initial_state: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
};

// @ts-ignore
export const UIProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_initial_state);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
  };
  const startDragging = () => dispatch({ type: 'UI - Set startDragging' });
  const endDragging = () => dispatch({ type: 'UI - Set endDragging' });

  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging
    }}>
      {children}
    </UIContext.Provider>
  );
};
