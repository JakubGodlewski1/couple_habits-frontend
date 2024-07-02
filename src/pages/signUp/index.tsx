import {Button, Input} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {signUpValidator} from "../../validators/authValidators.ts";
import {SignUp as SignUpType} from "../../../types";

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<SignUpType>({
        resolver: zodResolver(signUpValidator),
        mode: "onBlur"
    })

    const onSubmit = (data: SignUpType) => {
        console.log(data)
    }

    return (
        <div>
            <h2 className="mb-2">Sign up</h2>

            <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    variant="faded"
                    isInvalid={!!errors.email?.message}
                    errorMessage={errors.email?.message}
                    label="Email"
                    placeholder="name@mail.com"
                    type="email"
                    {...register("email")}
                />
                <Input
                    variant="faded"
                    isInvalid={!!errors.password?.message}
                    errorMessage={errors.password?.message}
                    label="Password"
                    placeholder="********"
                    type="password"
                    {...register("password")}
                />
                <Input
                    variant="faded"
                    isInvalid={!!errors.passwordConfirmation?.message}
                    errorMessage={errors.passwordConfirmation?.message}
                    label="Password confirmation"
                    placeholder="********"
                    type="password"
                    {...register("passwordConfirmation")}
                />
                <Button type="submit" color="primary">Sign up</Button>
            </form>
            <span className="block text-end mt-2 text-lg">Have an account yet? <Link
                className="text-blue-600 font-bold" to="/sign-in">Sign in</Link> instead.</span>

        </div>
    );
};

export default SignUp;