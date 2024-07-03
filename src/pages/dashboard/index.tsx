import TopBar from "./topBar";
import DashboardToggleScreen from "./dashboardToggleScreen";

const Dashboard = () => {
    return (
        <div className="gap-2.5 flex flex-col flex-grow">
            <TopBar/>
            <DashboardToggleScreen/>
        </div>

    );
};

export default Dashboard;