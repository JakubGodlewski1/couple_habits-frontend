import {Button, useDisclosure} from "@nextui-org/react";
import {IoIosArrowRoundForward} from "react-icons/io";
import UpdateAvatarModal from "./updateAvatarModal";

const Settings = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div className="flex-grow px-2 pb-2 flex flex-col">
                <h2>Settings</h2>
                <div className="flex flex-col gap-2 flex-grow">
                    <Button
                        onClick={onOpen}
                        className="bg-white shadow-xl w-full flex justify-between"
                    >
                        <span>Change profile picture</span>
                        <IoIosArrowRoundForward size="24"/>
                    </Button>

                    <Button className="bg-white shadow-xl w-full flex justify-between mt-auto">
                        <span>Logout</span>
                    </Button>
                </div>
            </div>
            <UpdateAvatarModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </>

    );
};

export default Settings;