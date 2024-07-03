import {createContext, PropsWithChildren, useState} from "react";
import {User} from "../../types";
import {exampleHabits} from "../../data/exampleHabits.ts";

type UserContext = {
    authIsReady: boolean,
    user: User | null,
    fetchUser: () => Promise<void>,
}

const initState: UserContext = {
    authIsReady: true,
    user: {
        habits: exampleHabits,
        email: "jakubgodlewski50@gmail.com",
        strike: 10
    },
    fetchUser: async () => {
    }
}

export const UserContext = createContext<UserContext>(initState)

export const UserContextProvider = ({children}: PropsWithChildren) => {
    const [userContext, setUserContext] = useState<UserContext>(initState)

    const fetchUser = async () => {
        //fetch user from db

        //set isAuthReady to true
        setUserContext(p => ({...p, authIsReady: true}))
    }

    return <UserContext.Provider value={{...userContext, fetchUser}}>
        {children}
    </UserContext.Provider>
}