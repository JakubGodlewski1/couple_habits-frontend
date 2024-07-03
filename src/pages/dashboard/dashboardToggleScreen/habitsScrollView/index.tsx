import {ScrollShadow} from "@nextui-org/react";
import {useEffect, useRef} from "react";
import {exampleHabits} from "../../../../../data/exampleHabits.ts";
import SwipeableHabitCard from "../../../../components/swipeableHabitCard";
import {DashboardTab} from "../../../../../types";
import BackgroundContainers from "./backgroundContainers";

const HabitsScrollView = ({selectedTab}: { selectedTab: DashboardTab }) => {

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
                {exampleHabits.map(h => (
                    <SwipeableHabitCard key={h.id} habit={h}/>
                ))}
            </ScrollShadow>
            <BackgroundContainers/>
        </div>
    );
};

export default HabitsScrollView;