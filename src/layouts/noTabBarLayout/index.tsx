import {useOutlet} from "react-router-dom";

const Index = () => {
    const outlet = useOutlet()
    return (
        <div className="mx-auto p-2 flex flex-col h-full">
            {outlet}
        </div>
    );
};

export default Index;