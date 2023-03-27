import { createContext, useContext } from 'react';
export const ValuesContext = createContext();
export const useValues = () => useContext(ValuesContext);
