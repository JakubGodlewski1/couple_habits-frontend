import {screen} from "@testing-library/react";
import renderWithReactRouter from "../../tests/utils/renderWithReactRouter.tsx";
import {expect} from "vitest";
import {userEvent} from "@testing-library/user-event";

type SignUpData = {
    email?: string,
    password?: string,
    passwordConfirmation?: string,
}

describe('SignUp', () => {
    const renderComponent = () => {
        renderWithReactRouter("/sign-up")

        const user = userEvent.setup();

        const emailInput = screen.getByRole("textbox", {name: /email/i})
        const passwordInput = screen.getByRole("password")
        const passwordConfirmationInput = screen.getByRole("password-confirmation")
        const submitButton = screen.getByRole("button", {name: /sign up/i})
        const redirectLink = screen.getByRole("link", {name: /sign in/i})


        const fillUpTheForm = async (data: SignUpData) => {
            if (data.email)
                await user.type(emailInput, data.email)

            if (data.password)
                await user.type(passwordInput, data.password)

            if (data.passwordConfirmation)
                await user.type(passwordConfirmationInput, data.passwordConfirmation)
        }

        const elements = {
            emailInput, passwordInput, passwordConfirmationInput, submitButton, redirectLink
        }

        return {elements, user, fillUpTheForm}
    }

    it('should render everything properly', () => {

        const {elements} = renderComponent()
        expect(elements.emailInput).toBeInTheDocument()
        expect(elements.passwordInput).toBeInTheDocument()
        expect(elements.passwordConfirmationInput).toBeInTheDocument()
        expect(elements.submitButton).toBeInTheDocument()
        expect(elements.redirectLink).toBeInTheDocument()
    })

    it('should show error if email is shorter than 4 characters', async () => {
        const {fillUpTheForm, user, elements: {emailInput}} = renderComponent()
        await fillUpTheForm({password: "password", passwordConfirmation: "passwordConfirmation"})
        await user.click(emailInput)
        await user.tab()
        const errorMessage = screen.getByText(/Email format is not valid/i)
        expect(errorMessage).toBeInTheDocument()
    });

    it('should show password error if its shorter than 6 characters', async () => {
        const {fillUpTheForm, user, elements: {passwordInput}} = renderComponent()
        await fillUpTheForm({password: "", passwordConfirmation: "passwordConfirmation", email: "emailIsCorrect@wp.pl"})
        await user.click(passwordInput)
        await user.tab()
        const errorMessage = screen.getByText(/password must be/i)
        expect(errorMessage).toBeInTheDocument()
    })

    it('should show password confirmation error if passwords are not the same', async () => {
        const {fillUpTheForm, user, elements: {passwordConfirmationInput}} = renderComponent()
        await fillUpTheForm({
            password: "password",
            passwordConfirmation: "passwordConfirmation",
            email: "emailIsCorrect@wp.pl"
        })
        await user.click(passwordConfirmationInput)
        await user.tab()
        const errorMessage = screen.getByText(/passwords must match/i)
        expect(errorMessage).toBeInTheDocument()
    });

    //test it when you start mocking api

    // it.each<{ inputValues: SignUpData }>([
    //     {inputValues: {email: "email@iscorrect.pl", password: "password", passwordConfirmation: "sjnvisvnissidnv"}},
    //     {inputValues: {email: "", password: "password", passwordConfirmation: ""}},
    //     {inputValues: {email: "", password: "password", passwordConfirmation: "password"}},
    //     {inputValues: {email: "email@iscorrect.pl", password: "", passwordConfirmation: "ieasfnsinwei"}},
    // ])("should not fire submit function if any of the fields have error", async ({inputValues}) => {
    //     useRenderWithReactRouter("/sign-up")
    //     const {elements: {submitButton}, fillUpTheForm} = getUtils()
    //     await fillUpTheForm(inputValues)
    // })


    // it('should call onSubmit function if all the inputs were correct', () => {
    //
    // });

    it('should redirect you to sign in page after clicking "sign in" button', async () => {
        const {user, elements: {redirectLink}} = renderComponent()
        await user.click(redirectLink)
        const signInPage = screen.getByRole("heading", {name: /sign in/i})
        expect(signInPage).toBeInTheDocument()
    });

});