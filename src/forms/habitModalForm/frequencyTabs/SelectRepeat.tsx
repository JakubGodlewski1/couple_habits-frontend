import {Select, SelectItem} from "@nextui-org/react";
import {Frequency, Repeat} from "../../../../types";
import {ChangeEvent} from "react";

type Props = {
    option: Repeat,
    setFrequency: (frequency: Frequency) => void,
}

const SelectRepeat = ({option, setFrequency}: Props) => {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFrequency({
            type: "repeat",
            repeatOption: e.target.value as Repeat,
        })
    }

    return (
        <Select

            onChange={onChange}
            size="lg"
            selectedKeys={[option]}
            aria-label="How often"
        >
            <SelectItem aria-label="daily" key="daily">Daily</SelectItem>
            <SelectItem aria-label="weekly" key="weekly">Weekly</SelectItem>
        </Select>
    );
};

export default SelectRepeat;