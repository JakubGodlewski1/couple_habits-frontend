import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input} from "@nextui-org/react";
import {CreateHabit, Frequency, Habit} from "../../../types";
import {useState} from "react";
import FrequencyTabs from "./frequencyTabs";

type Props = {
    habit?: Habit,
    isOpen: boolean,
    onOpenChange: () => void,
    onClose: () => void
}

const initialHabit: CreateHabit = {
    frequency: {
        type: "repeat",
        repeatOption: "daily"
    },
    details: {
        mine: {
            label: "",
            completed: false
        },
        partner: {
            label: "",
            completed: false
        }
    }
}

const HabitModalForm = ({habit, isOpen, onOpenChange, onClose}: Props) => {
    const [habitForm, setHabitForm] = useState(habit || initialHabit)

    const [partnerHabitVisible, setPartnerHabitVisible] = useState(false);
    const onSubmit = async () => {

        //send habit to db
        onClose()
    }

    return (
        <>
            <Modal
                className="bg-gradient"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader
                                aria-label={habit ? "Update" : "Create"}
                                className="flex flex-col gap-1">{habit ? "Update" : "Create" + " habit"}</ModalHeader>
                            <ModalBody>
                                <div className="flex-grow flex flex-col rounded-t-lg">
                                    <Checkbox
                                        isSelected={partnerHabitVisible}
                                        onValueChange={setPartnerHabitVisible}
                                        color="primary"
                                        className="[&>span:before]:border-gray-100"
                                        size="lg"
                                    >We want to implement different habits
                                    </Checkbox>
                                    <form onSubmit={onSubmit} className="mt-8 flex flex-col flex-grow gap-2">
                                        <Input
                                            value={undefined}
                                            onValueChange={() => {
                                            }}
                                            errorMessage={"error"}
                                            label={partnerHabitVisible ? "Your habit" : "Your habits"}
                                            placeholder="Running at least 10 minutes"
                                        />
                                        {partnerHabitVisible &&
                                            <Input
                                                value={undefined}
                                                onValueChange={() => {
                                                }}
                                                errorMessage={"error"}
                                                label="Partner's habit"
                                                placeholder="Reading 3 pages or more of non-fiction"
                                            />
                                        }
                                        <div className="flex flex-col">
                                            <span className="font-bold mb-0.5">How often</span>
                                            <FrequencyTabs
                                                frequency={habitForm.frequency}
                                                setFrequency={(frequency: Frequency) => {
                                                    setHabitForm(p => ({...p, frequency}))
                                                }}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    {habit ? "Update" : "Create"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default HabitModalForm;