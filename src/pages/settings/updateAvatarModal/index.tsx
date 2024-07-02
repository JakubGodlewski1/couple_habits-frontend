import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useState} from "react";
import ErrorAlert from "../../../components/errorAlert";
import {handleFileSelection, handleSubmit} from "./helperFunctions.ts";
import {FilesEvent} from "../../../../types";

type Props = {
    isOpen: boolean,
    onOpenChange: () => void,
}

const Index = ({onOpenChange, isOpen}: Props) => {
    const [avatar, setAvatar] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)

    return (
        <div>
            <>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Update profile picture</ModalHeader>
                                <ModalBody>
                                    <input
                                        role="file-upload"
                                        multiple={false}
                                        onChange={(
                                            event: FilesEvent) =>
                                            handleFileSelection({
                                                event,
                                                updateAvatar: (avatar) => setAvatar(avatar),
                                                updateError: (error) => setError(error)
                                            })}
                                        name="avatar"
                                        type="file"/>
                                    <span className="text-sm">Upload jpg, jpeg png (max 2mb)</span>
                                    <ErrorAlert errorMessage={error}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button onClick={() => handleSubmit(avatar, (error) => setError(error))}
                                            isDisabled={!avatar} disabled={!avatar}
                                            color="primary" onPress={onClose}>
                                        Upload avatar
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        </div>
    );
};

export default Index;