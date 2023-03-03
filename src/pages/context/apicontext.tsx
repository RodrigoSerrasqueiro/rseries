import React, { createContext, useState } from 'react';

interface GlobalState {
  chave: number;
  setChave: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalState>({
  chave: 0,
  setChave: () => null,
});

export const GlobalProvider: React.FC<any> = ({ children }) => {
  const [chave, setChave] = useState<number>(0);

  return (
    <GlobalContext.Provider value={{ chave, setChave }}>
      {children}
    </GlobalContext.Provider>
  );
};
