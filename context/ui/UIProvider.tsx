import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './UIReducer';


export interface UIState {
  sideMenuOpen: boolean;
}

const UI_initial_state: UIState = {
  sideMenuOpen: false
};

// @ts-ignore
export const UIProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_initial_state);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  return (
    <UIContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu
    }}>
      {children}
    </UIContext.Provider>
  );
};
