import {screen} from "@testing-library/react";
import renderWithReactRouter from "../../tests/utils/renderWithReactRouter.tsx";
import {expect} from "vitest";
import {userEvent} from "@testing-library/user-event";

type SignInData = {
    email?: string,
    password?: string
}

describe('SignUp', () => {
    const renderComponent = () => {
        renderWithReactRouter("/sign-in")

        const user = userEvent.setup();

        const emailInput = screen.getByRole("textbox", {name: /email/i})
        const passwordInput = screen.getByRole("password")
        const submitButton = screen.getByRole("button", {name: /sign in/i})
        const redirectLink = screen.getByRole("link", {name: /sign up/i})


        const fillUpTheForm = async (data: SignInData) => {
            if (data.email)
                await user.type(emailInput, data.email)

            if (data.password)
                await user.type(passwordInput, data.password)
        }

        const elements = {
            emailInput, passwordInput, submitButton, redirectLink
        }

        return {elements, user, fillUpTheForm}
    }

    it('should render everything properly', () => {
        const {elements} = renderComponent()
        expect(elements.emailInput).toBeInTheDocument()
        expect(elements.passwordInput).toBeInTheDocument()
        expect(elements.submitButton).toBeInTheDocument()
        expect(elements.redirectLink).toBeInTheDocument()
    })

    it('should show error if email is shorter than 4 characters', async () => {
        const {fillUpTheForm, user, elements: {emailInput}} = renderComponent()
        await fillUpTheForm({password: "password"})
        await user.click(emailInput)
        await user.tab()
        const errorMessage = screen.getByText(/Email format is not valid/i)
        expect(errorMessage).toBeInTheDocument()
    });

    it('should show password error if its shorter than 6 characters', async () => {
        const {fillUpTheForm, user, elements: {passwordInput}} = renderComponent()
        await fillUpTheForm({password: "12345", email: "emailIsCorrect@wp.pl"})
        await user.click(passwordInput)
        await user.tab()
        const errorMessage = screen.getByText(/password must be/i)
        expect(errorMessage).toBeInTheDocument()
    })

    //test it when you start mocking api

    // it.each<{ inputValues: SignInData }>([
    //     {inputValues: {email: "email@iscorrect.pl", password: "password"}},
    //     {inputValues: {email: "", password: "password"}},
    //     {inputValues: {email: "", password: "password"}},
    //     {inputValues: {email: "email@iscorrect.pl", password: ""}},
    // ])("should not fire submit function if any of the fields have error", async ({inputValues}) => {
    //     useRenderWithReactRouter("/sign-up")
    //     const {elements: {submitButton}, fillUpTheForm} = getUtils()
    //     await fillUpTheForm(inputValues)
    // })
    //
    //
    // it('should call onSubmit function if all the inputs were correct', () => {
    //
    // });

    it('should redirect you to sign up page after clicking "sign up" button', async () => {
        const {user, elements: {redirectLink}} = renderComponent()
        await user.click(redirectLink)
        const signInPage = screen.getByRole("heading", {name: /sign up/i})
        expect(signInPage).toBeInTheDocument()
    });

});