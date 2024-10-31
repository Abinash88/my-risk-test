import { createContext, useContext, useEffect, useState } from "react";
import PopUpMessage from "../shared/ReuseAble/popup-message";

export type PopupTypes = { message: string; popup: boolean };

export type ContextTypes = {
  setPopup: React.Dispatch<React.SetStateAction<PopupTypes | undefined>>;
  popup: PopupTypes | undefined;
};

export const myContext = createContext<ContextTypes | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [popup, setPopup] = useState<PopupTypes>();
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPopup(undefined);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [popup]);

  return (
    <myContext.Provider value={{ popup, setPopup }}>
      {popup && (
        <PopUpMessage
          message={popup?.message || ""}
          popup={popup?.popup}
          onCancel={() => setPopup(undefined)}
        />
      )}
      {children}
    </myContext.Provider>
  );
};

export const GetContext = () => {
  const context = useContext(myContext);
  if (!context) throw Error("Wrapped a app by the context Provider!");
  return context;
};

export default MainContextProvider;
