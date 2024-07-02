import {Outlet} from "react-router-dom";
import TabBar from "../../components/tabBar";

const TabBarLayout = () => {

    return (
        <main className="flex flex-col h-full">
            <div className="p-2 flex flex-col flex-grow mx-auto w-full h-full">
                <Outlet/>
            </div>
            <TabBar/>
        </main>
    );
};

export default TabBarLayout;