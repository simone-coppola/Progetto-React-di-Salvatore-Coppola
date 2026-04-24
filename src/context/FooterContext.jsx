import { createContext, useContext, useState } from "react";

const FooterContext = createContext();

export function FooterProvider({ children }) {
  const [openSection, setOpenSection] = useState(null);

  return (
    <FooterContext.Provider value={{ openSection, setOpenSection }}>
      {children}
    </FooterContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFooter() {
  return useContext(FooterContext);
}