import {useOutlet} from "react-router-dom";
import Providers from "../../components/providers";

const GlobalLayout = () => {
    const outlet = useOutlet()
    return <Providers>
        {outlet}
    </Providers>
};

export default GlobalLayout;