import {IoMdAdd} from "react-icons/io";
import {useDisclosure} from "@nextui-org/react";

const TopBar = () => {

    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure()

    return (
        <div className="flex gap-2.5">
            <div className="flex-grow glass-container flex justify-between px-4 items-center text-lg">
                <div>
                    <span>Strike: </span>
                    <span className="font-bold">0 days</span>
                </div>
                <div>
                    <span>Points: </span>
                    <span className="font-bold">0</span>
                </div>
            </div>
            <button
                onClick={onOpen}
                className="glass-container w-11 h-11 flex items-center justify-center">
                <IoMdAdd size={28}/>
            </button>
        </div>
    );
};

export default TopBar;
