import {PropsWithChildren} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {UserContextProvider} from "../../contexts/userContext.tsx";

const Providers = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();

    return (
        <NextUIProvider className="h-full" navigate={navigate}>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </NextUIProvider>
    );
};

export default Providers;