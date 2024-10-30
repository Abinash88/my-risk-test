import { createContext, useContext, useEffect, useState } from "react";
import PopUpMessage from "../shared/ReuseAble/popup-message";

export type ContextTypes = {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  popup: boolean;
};

export const myContext = createContext<ContextTypes | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPopup(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [setPopup]);
  return (
    <myContext.Provider value={{ popup, setPopup }}>
      <PopUpMessage onCancel={() => setPopup(false)} />
      {children}
    </myContext.Provider>
  );
};

export const GetContext = () => {
  const context = useContext(myContext);
  if (!context) throw Error("Context should be in app, by the Providerr");
  return context;
};

export default MainContextProvider;
