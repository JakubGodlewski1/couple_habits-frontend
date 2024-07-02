import hero_couple from "../../../assets/ilustrations/hero_couple.png";
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import {IoIosArrowRoundForward} from "react-icons/io";


const DesktopView = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <>
            <Layout onOpen={onOpen}/>
            <WarningModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </>

    );
};

const Layout = ({onOpen}: { onOpen: () => void }) => {
    return <div className="flex h-full items-center">
        <div className="space-y-4 w-1/2">
            <h1 className="text-6xl">
                Them for You, <br/>
                You for Them. <br/>
                Get better <span className="underline">together!</span>
            </h1>
            <h3>Habit app for couples</h3>
            <Button onPress={onOpen} color="primary" size="lg">
                <span className="text-xl font-bold">Couple up</span>
                <IoIosArrowRoundForward className="rotate-[-45deg]" size="30"/>
            </Button>
        </div>
        <div className="flex-grow flex items-end mb-6 justify-center">
            <img src={hero_couple} alt="Couple as heroes" className="max-h-[65vh]"/>
        </div>
    </div>
}

const WarningModal = ({isOpen, onOpenChange}: {
    isOpen: boolean | undefined,
    onOpenChange: ((isOpen: boolean) => void) | undefined
}) => {

    return <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">The app is only available on mobile.</ModalHeader>
                        <ModalBody>
                            <p>
                                Hi, Thanks for showing interest in our app. Currently it only works on mobile web.
                                Please
                                go to <span className="underline">www.couplehabits.com</span> on your phone to enjoy it!
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Alright!
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}


export default DesktopView;