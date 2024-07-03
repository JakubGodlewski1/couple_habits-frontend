import {useState} from "react";
import {DashboardTab} from "../../../../types";
import DashboardTabs from "./DashboardTabs";
import HabitsScrollView from "./habitsScrollView";


const DashboardToggleScreen = () => {
    const [selectedTab, setSelectedTab] = useState<DashboardTab>("todo");

    return (
        <div className="gap-2.5 flex flex-col flex-grow">
            <DashboardTabs selectedTab={selectedTab} setSelectedTab={(option: DashboardTab) => setSelectedTab(option)}/>
            <HabitsScrollView selectedTab={selectedTab}/>
        </div>
    );
};

export default DashboardToggleScreen;