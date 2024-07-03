import {Tab, Tabs} from "@nextui-org/react";
import {DashboardTab} from "../../../../../types";

type Props = {
    selectedTab: DashboardTab;
    setSelectedTab: (selectedTab: DashboardTab) => void;
}

const DashboardTabs = ({selectedTab, setSelectedTab}: Props) => {

    return (
        <Tabs
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key as "todo" | "completed" | "all")}
            classNames={{
                tabContent: "text-black",
                tabList: " border-1 border-white bg-white/20",
            }}
            size="lg"
            fullWidth radius="md"
        >
            <Tab key="todo" title="Todo"/>
            <Tab key="completed" title="Completed"/>
            <Tab key="all" title="All"/>
        </Tabs>

    );
};

export default DashboardTabs;