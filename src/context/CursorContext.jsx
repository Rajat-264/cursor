import React, { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ theme, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ theme, isHovered, setIsHovered }}>
      {children}
    </CursorContext.Provider>
  );
};
