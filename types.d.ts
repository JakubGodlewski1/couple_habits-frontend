import {z} from "zod";
import {createAccountValidator} from "./src/validators/authValidators";

type SignUp = z.infer<typeof createAccountValidator>
type SignIn = z.infer<typeof createAccountValidator>