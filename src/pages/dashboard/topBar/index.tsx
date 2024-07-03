import {IoMdAdd} from "react-icons/io";
import {useDisclosure} from "@nextui-org/react";
import HabitModalForm from "../../../forms/habitModalForm";

const TopBar = ({strike}: { strike: number }) => {

    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure()

    return (
        <div className="flex gap-2.5">
            <div className="flex-grow glass-container flex justify-between px-4 items-center text-lg">
                <div>
                    <span>Strike:</span>
                    <span className="font-bold"> {strike} {strike === 1 ? "day" : "days"}</span>
                </div>
            </div>
            <button
                aria-label="add"
                onClick={onOpen}
                className="glass-container w-11 h-11 flex items-center justify-center">
                <IoMdAdd size={28}/>
            </button>
            <HabitModalForm onClose={onClose} isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>
    );
};

export default TopBar;
