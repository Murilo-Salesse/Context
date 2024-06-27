import { createContext, ReactNode, useState } from "react";

interface NumberContextProps {
  changeNumber(): void;
  number: number;
}

export const NumberContext = createContext({} as NumberContextProps);

interface ShareNumbersContextProviderProps {
  children: ReactNode;
}

export function ShareNumbersContextProvider({ children }: ShareNumbersContextProviderProps) {
  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  return (
    <NumberContext.Provider value={{ number, changeNumber }}>
      {children}
    </NumberContext.Provider>
  );
}
