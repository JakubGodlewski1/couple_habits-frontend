import TopBar from "./topBar";
import DashboardToggleScreen from "./dashboardToggleScreen";
import {useUserContext} from "../../hooks/useUserContext.ts";

const Dashboard = () => {
    const {user} = useUserContext()

    return (
        <div className="gap-2.5 flex flex-col flex-grow">
            <TopBar strike={user!.strike}/>
            <DashboardToggleScreen user={user!}/>
        </div>

    );
};

export default Dashboard;