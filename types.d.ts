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