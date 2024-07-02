import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Input} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {signInValidator} from "../../validators/authValidators.ts";
import {SignIn as SignInType} from "../../../types";

const SignIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<SignInType>({
        resolver: zodResolver(signInValidator),
        mode: "onBlur"
    })

    const onSubmit = (data: SignInType) => {
        console.log(data)
    }

    return (
        <div>
            <h2 className="mb-2">Sign in</h2>

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
                    role="password"
                    variant="faded"
                    isInvalid={!!errors.password?.message}
                    errorMessage={errors.password?.message}
                    label="Password"
                    placeholder="********"
                    type="password"
                    {...register("password")}
                />
                <Button type="submit" color="primary">Sign in</Button>
            </form>
            <span className="block text-end mt-2 text-lg">Don't have an account yet? <Link
                className="text-blue-600 font-bold" to="/sign-up">Sign up</Link> instead.</span>

        </div>
    );
};

export default SignIn;