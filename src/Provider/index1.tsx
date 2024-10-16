import { GlobalComponent } from '@/GlobalContext/GlobalComponent';
import { createContext, ReactNode, useContext } from 'react';

const GlobalComponentContxet = createContext(GlobalComponent);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <GlobalComponentContxet.Provider value={GlobalComponent}>
      {children}
    </GlobalComponentContxet.Provider>
  );
};

export const useGlobalComponent = () => {
  return useContext(GlobalComponentContxet);
};
