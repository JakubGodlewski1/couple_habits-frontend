import {Checkbox} from "@nextui-org/react";
import {Habit} from "../../../types";

type Props = {
    readOnly: boolean,
    habit: Habit
}

const HabitCard = ({readOnly, habit: {details: {mine, partner}}}: Props) => {

    return (
        <div className="glass-container bg-white w-full p-1 gap-1.5 flex min-h-[90px] relative">
            <div className=" flex-grow flex-shrink basis-0 glass-container relative z-40">
                <div className="absolute inset-0  break-words gap-2 p-0.5">
                    {!readOnly &&
                        <Checkbox
                            isSelected={mine.completed}
                            color={mine.completed ? "success" : "danger"}
                        />
                    }
                    <span>{mine.label}</span>
                </div>
            </div>
            <div className="border-x-1 border-gray-200/90 w-3 -my-[5px]"></div>
            <div className=" flex-grow flex-shrink basis-0 glass-container relative">
                <div className="absolute inset-0 z-50 break-words gap-2 p-0.5">
                    <span>{partner.label}</span>
                    {!readOnly && (
                        <div
                            className={`absolute w-4 h-4 rounded-full bottom-0.5 right-0.5 ${partner.completed ? "bg-success" : "bg-danger"}`}></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HabitCard;
