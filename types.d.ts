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

//habit
export type Repeat = "daily" | "weekly"
export type Specific_days = ("M" | "T" | "W" | "R" | "F" | "S" | "U")[]
export type Frequency = Repeat | Specific_days

export type Habit = {
    id: string,
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