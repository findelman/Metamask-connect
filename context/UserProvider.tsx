import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  metaMaskConnect: false,
  showPopUp: true,
  userInfo: {
    address: "",
    username: "",
    email: "",
  },
  setuserInfo: (() => {}) as Dispatch<
    React.SetStateAction<{ address: string; username: string; email: string }>
  >,
  setshowPopUp: (() => {}) as Dispatch<SetStateAction<boolean>>,
  setIsLoggedIn: (() => {}) as Dispatch<SetStateAction<boolean>>,
  setmetaMaskConnect: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [metaMaskConnect, setmetaMaskConnect] = useState(false);
  const [showPopUp, setshowPopUp] = useState<boolean>(true);
  const [userInfo, setuserInfo] = useState({
    address: "",
    username: "",
    email: "",
  });
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        metaMaskConnect,
        setmetaMaskConnect,
        showPopUp,
        setshowPopUp,
        userInfo,
        setuserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
