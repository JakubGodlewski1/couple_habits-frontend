import {useState} from "react";
import {DashboardTab, User} from "../../../../types";
import DashboardTabs from "./DashboardTabs";
import HabitsScrollView from "./habitsScrollView";


const DashboardToggleScreen = ({user}: { user: User }) => {
    const [selectedTab, setSelectedTab] = useState<DashboardTab>("todo");

    return (
        <div className="gap-2.5 flex flex-col flex-grow">
            <DashboardTabs selectedTab={selectedTab} setSelectedTab={(option: DashboardTab) => setSelectedTab(option)}/>
            <HabitsScrollView habits={user.habits} selectedTab={selectedTab}/>
        </div>
    );
};

export default DashboardToggleScreen;