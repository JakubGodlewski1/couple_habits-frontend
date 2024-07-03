import {useContext} from "react";
import {UserContext} from "../contexts/userContext.tsx";

export const useUserContext = () => {
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("User context has to be within user context provider")
    }

    return userContext
}