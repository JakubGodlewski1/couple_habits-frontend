import MultiTabs from "../../../components/MultiTabs.tsx";
import {Frequency, Specific_days} from "../../../../types";

type Props = {
    specificDays: Specific_days,
    setFrequency: (frequency: Frequency) => void,
}

const SpecificDaysTabs = ({specificDays, setFrequency}: Props) => {

    const validateSpecificDays = (day: keyof Specific_days) => {
        if
        ((Object.values(specificDays).filter(v => v).length === 1) &&
            specificDays[day]
        ) return

        setFrequency({
            type: "specific days",
            specificDaysOption: {...specificDays, [day]: !specificDays[day]}
        })
    }

    return (
        <MultiTabs options={specificDays} setOptions={validateSpecificDays}/>
    );
};

export default SpecificDaysTabs;