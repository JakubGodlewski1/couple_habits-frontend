import {Tab, Tabs} from "@nextui-org/tabs";
import {Frequency} from "../../../../types";
import SelectRepeat from "./SelectRepeat.tsx";
import SpecificDaysTabs from "./SpecificDaysTabs.tsx";
import {Key} from "react";

type Props = {
    frequency: Frequency,
    setFrequency: (frequency: Frequency) => void
}

const FrequencyTabs = ({frequency, setFrequency}: Props) => {

    const onSelectionChange = (selectedOption: Key) => {
        if (selectedOption === frequency.type) {
            return
        }

        if (selectedOption === "specific days") {
            setFrequency({
                type: "specific days",
                specificDaysOption: {
                    "M": true,
                    "T": false,
                    "W": false,
                    "R": false,
                    "F": false,
                    "S": false,
                    "U": false,
                }
            })
        }

        if (selectedOption === "repeat") {
            setFrequency({
                type: "repeat",
                repeatOption: "daily"
            })
        }
    }

    return (
        <Tabs
            selectedKey={frequency.type}
            onSelectionChange={onSelectionChange}
            classNames={{
                tabContent: "text-black",
                tabList: "border-1 border-white bg-white/20",
            }}
            size="lg"
            fullWidth
            radius="md"
        >
            <Tab key="repeat" title="Repeat">
                {frequency.type === "repeat" &&
                    <SelectRepeat setFrequency={setFrequency} option={frequency.repeatOption}/>}
            </Tab>
            <Tab key="specific days" title="Specific days">
                {frequency.type === "specific days" &&
                    <SpecificDaysTabs setFrequency={setFrequency} specificDays={frequency.specificDaysOption}/>}
            </Tab>
        </Tabs>
    );
};

export default FrequencyTabs;
