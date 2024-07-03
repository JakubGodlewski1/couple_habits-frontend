import {ScrollShadow} from "@nextui-org/react";
import {useEffect, useRef} from "react";
import SwipeableHabitCard from "../../../../components/swipeableHabitCard";
import {DashboardTab, Habit} from "../../../../../types";
import BackgroundContainers from "./backgroundContainers";
import {habitFilters} from "../../../../utils/habitFilters.ts";

const {notCompletedToday, notCompletedThisWeek, completedToday, allToday, completedThisWeek, allThisWeek} = habitFilters


type Props = {
    habits: Habit[],
    selectedTab: DashboardTab
}

const dashboardTabsFilterMap: {
    today: Record<DashboardTab, (h: Habit) => void>,
    thisWeek: Record<DashboardTab, (h: Habit) => void>
} = {
    today: {
        todo: notCompletedToday,
        completed: completedToday,
        all: allToday
    },
    thisWeek: {
        todo: notCompletedThisWeek,
        completed: completedThisWeek,
        all: allThisWeek
    }
}

/*component*/
const HabitsScrollView = ({selectedTab, habits}: Props) => {

    const scrollView = useRef<HTMLDivElement>(null)

    //set scroll view to 0 after changing tabs
    useEffect(() => {
        if (scrollView.current && scrollView.current.scrollTop !== 0) {
            scrollView.current.scrollTop = 0;
        }
    }, [selectedTab]);

    return (
        <div className="relative flex-grow flex flex-col">
            <div className="h-[85px]"></div>
            <ScrollShadow
                ref={scrollView}
                visibility="top"
                hideScrollBar={true}
                size={10}
                className="flex flex-grow flex-shrink basis-0 gap-3 flex-col px-1.5 pb-1.5 rounded-xl -mt-1 pt-2">
                <h1 className="text-center">Today</h1>
                {habits.filter(dashboardTabsFilterMap.today[selectedTab])
                    .map(h =>
                        <SwipeableHabitCard
                            key={h.id}
                            readOnly={selectedTab === "all"}
                            habit={h}
                        />)}
                <h2 className="text-center">This Week</h2>
                {habits.filter(dashboardTabsFilterMap.thisWeek[selectedTab])
                    .map(h =>
                        <SwipeableHabitCard
                            key={h.id}
                            readOnly={selectedTab === "all"}
                            habit={h}
                        />
                    )}
            </ScrollShadow>
            <BackgroundContainers/>
        </div>
    );
};

export default HabitsScrollView;