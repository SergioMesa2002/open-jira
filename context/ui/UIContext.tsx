import { createContext } from 'react';


interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  startDragging: () => void;
  endDragging: () => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
