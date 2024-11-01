import { createContext, useState } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  return (
    <BioContext.Provider value={{ theme, setTheme }}>
      {children}
    </BioContext.Provider>
  );
};
