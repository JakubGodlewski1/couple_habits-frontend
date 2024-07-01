import {PropsWithChildren} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

const Providers = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();

    return (
        <NextUIProvider navigate={navigate}>
            {children}
        </NextUIProvider>
    );
};

export default Providers;