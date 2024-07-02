import {avatarUploadValidator} from "../../../validators/uploadValidators.ts";
import {FilesEvent} from "../../../../types";

/*handle submit*/
export const handleSubmit = (avatar: File | null, updateError: (error: string | null) => void) => {

    if (!avatar) {
        updateError("You have to choose a file first")
        return
    }

    //send file to db
}


/*handle file selection*/
type Props = {
    event: FilesEvent,
    updateError: (error: string | null) => void,
    updateAvatar: (avatar: File | null) => void,
}

export const handleFileSelection = ({event: {target}, updateAvatar, updateError}: Props) => {
    updateError(null)
    updateAvatar(null)

    //if file does not exist, return
    if (!target.files || target.files.length === 0) return;
    const file = target.files[0];

    // validate the file
    const result = avatarUploadValidator.safeParse(file)

    //on error
    if (result.error) {
        const errorMessage = result.error.format()._errors[0]
        updateError(errorMessage)
        target.value = ""
        return;
    }

    //on success
    updateAvatar(file)
}