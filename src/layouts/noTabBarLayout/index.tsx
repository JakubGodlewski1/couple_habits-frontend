import {useOutlet} from "react-router-dom";

const Index = () => {
    const outlet = useOutlet()
    return (
        <div>
            {outlet}
        </div>
    );
};

export default Index;