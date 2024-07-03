import {z} from "zod";
import {createAccountValidator} from "./src/validators/authValidators";
import {avatarUploadValidator} from "./src/validators/uploadValidators.ts";
import {FormEvent} from "react";

//auth
type SignUp = z.infer<typeof createAccountValidator>
type SignIn = z.infer<typeof createAccountValidator>

//uploads
type Avatar = z.infer<typeof avatarUploadValidator>
type Target = HTMLInputElement & {
    files: FileList;
}
type FilesEvent = FormEvent<HTMLInputElement> & { target: Target };


//habit details
type Repeat = "daily" | "weekly"
type Specific_days = {
    "M": boolean,
    "T": boolean,
    "W": boolean,
    "R": boolean,
    "F": boolean,
    "S": boolean,
    "U": boolean
}

// type Frequency = Repeat | Specific_days
type FrequencyType = "repeat" | "specific days"
type Frequency = { type: "repeat", repeatOption: Repeat } | { type: "specific days", specificDaysOption: Specific_days }

//create Habit - use it in a form when creating or altering a habit
type CreateHabit = {
    frequency: Frequency,
    details: {
        mine: {
            label: string,
            completed: boolean
        },
        partner: {
            label: string,
            completed: boolean
        }
    }
}

type Habit = CreateHabit & { id: string }


//user (data from the server containing all the necessary information)
type User = {
    email: string
    avatar?: string
    partnerAvatar?: string
    habits: Habit[]
    strike: number
};


//Dashboard page
type DashboardTab = "todo" | "completed" | "all"


/*backend habit - for later*/
type H = {
    id: string
    frequency: Frequency
    details: [
        {
            userId: number,
            label: string,
            completed: boolean
        },
        {
            userId: number,
            label: string,
            completed: boolean
        }
    ],
    strike: number
}