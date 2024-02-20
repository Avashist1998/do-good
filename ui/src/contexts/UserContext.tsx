import { createContext } from "react";
import type UserInfo  from "../types/userInfo";

type UserContextType = {
    userData: UserInfo | null;
    setUserData: (userInfo: UserInfo | null) => void;
};

const CurrentUserContext = createContext<UserContextType>({
    userData: null,
    setUserData: () => {},
});


export { CurrentUserContext };