import hero_couple from "../../../assets/ilustrations/hero_couple.png";
import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";

const MobileView = () => {
    return (
        <div className="flex flex-col flex-grow">
            <div className="space-y-3">
                <h1 className="leading-10 mt-[3vh]">
                    Them for You, <br/>
                    You for Them. <br/>
                    Get better <span className="underline">together!</span>
                </h1>
                <h3>Habit app for couples</h3>
            </div>
            <div className="flex-grow flex items-end mb-6 justify-center">
                <img src={hero_couple} alt="Couple as heroes" className="max-h-[35vh] max-w-[80vw] w-auto"/>
            </div>
            <Button as={Link} to="/sign-up" color="primary" size="lg">
                <span className="text-xl font-bold">Couple up</span>
                <IoIosArrowRoundForward className="rotate-[-45deg]" size="30"/>
            </Button>
        </div>
    );
};

export default MobileView;