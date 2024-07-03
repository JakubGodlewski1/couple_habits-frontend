import {Avatar} from "@nextui-org/react";

const BackgroundContainers = () => {

    // const partner = false

    return <div className=" absolute flex gap-2.5 w-full top-0 bottom-0 pointer-events-none">
        <div className=" glass-container w-full">
            <Avatar
                // src={user!.avatar!}
                className="pointer-events-auto mx-auto mt-3 bg-violet-200 text-xl w-16 h-16"
            />
        </div>
        <div className=" glass-container w-full">
            <Avatar
                classNames={{
                    // icon: "text-gray-500"
                }} className="pointer-events-auto bg-rose-50 mx-auto mt-3 w-16 h-16"/>

        </div>
    </div>
}

export default BackgroundContainers;