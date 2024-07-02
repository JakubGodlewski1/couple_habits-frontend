import {PropsWithChildren} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

const Providers = ({children}: PropsWithChildren) => {
    const navigate = useNavigate();

    return (
        <NextUIProvider className="h-full" navigate={navigate}>
            {children}
        </NextUIProvider>
    );
};

export default Providers;