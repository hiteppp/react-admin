import { createContext, ReactNode, useContext } from 'react';
import { GlobalComponent } from '@/GlobalContext/GlobalComponent';

// 创建一个 Context
const GlobalComponentContext = createContext(GlobalComponent);

// 创建 Context Provider
export const GlobalComponentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <GlobalComponentContext.Provider value={GlobalComponent}>
      {children}
    </GlobalComponentContext.Provider>
  );
};

// 自定义 Hook
export const useGlobalComponet = () => {
  return useContext(GlobalComponentContext);
};
