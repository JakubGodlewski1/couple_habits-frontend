import {useOutlet} from "react-router-dom";

const TabBarLayout = () => {
    const outlet = useOutlet()

    return (
        <div>
            {outlet}
        </div>
    );
};

export default TabBarLayout;