import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
