import {useSwipe} from "../../hooks/useSwipe.ts";
import {IoTrashBinOutline} from "react-icons/io5";
import {CiEdit} from "react-icons/ci";
import {Habit} from "../../../types";
import HabitCard from "../habitCard";


type Props = {
    readOnly?: boolean,
    habit: Habit
}

const SwipeableHabitCard = ({readOnly = false, habit}: Props) => {
    const {handlers, isOpen} = useSwipe()

    return (
        <div className="relative overflow-hidden transition-all glass-container min-h-[90px]">
            <div className="relative z-20 transition-all min-h-[90px]" {...handlers} style={{right: isOpen ? 150 : 0}}>
                <HabitCard readOnly={readOnly} habit={habit}/>
            </div>
            <button className="absolute right-4 top-[50%] glass-container -translate-y-1/2 bg-white rounded-md p-2">
                <IoTrashBinOutline size={26}/>
            </button>
            <button className="absolute right-20 top-[50%] glass-container -translate-y-1/2 bg-white rounded-md p-2">
                <CiEdit size={26}/>
            </button>
        </div>
    );
};

export default SwipeableHabitCard;