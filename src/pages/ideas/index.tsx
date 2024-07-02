import {ScrollShadow} from "@nextui-org/react";
import {IDEAS} from "../../../data/ideas";

const Ideas = () => {
    //TODO - COPY IDEAS ON CLICK
    //TODO - UPDATE IDEAS BECAUSE THEY SUCK

    return (
        <ScrollShadow size={20}
                      className="overflow-scroll px-2 pb-2 glass-container flex-grow flex-shrink basis-0 scrollbar-hide">
            <h2>Ideas</h2>
            <div className="gap-2.5 grid grid-cols-2">
                {IDEAS.map(idea => (
                    <div
                        role="idea"
                        key={idea}
                        className="bg-white shadow-xl p-2 rounded-lg"
                    >
                        <span>{idea}</span>
                    </div>
                ))}
            </div>
        </ScrollShadow>
    );
};

export default Ideas;