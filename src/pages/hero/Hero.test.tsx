import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import Hero from "./index.tsx";
import {userEvent} from "@testing-library/user-event";
import {SCREEN_THRESHOLD} from "../../utils/constants.ts";
import renderWithReactRouter from "../../tests/utils/renderWithReactRouter.tsx";

describe('Hero', () => {
    function resizeWindow(width: number) {
        // eslint-disable-next-line no-global-assign
        window = Object.assign(window, {innerWidth: width});
    }

    const renderComponent = () => {
        const user = userEvent.setup()

        render(
            <Hero/>
        )
        const title = screen.getByRole('heading', {name: /get better together/i});
        const subtitle = screen.getByRole('heading', {name: /for couples/i});
        const button = screen.getByRole('button', {name: /couple up/i});
        const illustration = screen.getByRole('img');

        return {
            elements: {title, subtitle, illustration, button},
            user
        }
    }

    it('should render title, subtitle, button and illustration', () => {
        const {elements: {title, subtitle, button, illustration}} = renderComponent()
        expect(title).toBeInTheDocument()
        expect(subtitle).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(illustration).toBeInTheDocument()
    });

    it('should redirect you to sign up page if page is smaller or equal SCREEN_THRESHOLD', async () => {
        resizeWindow(SCREEN_THRESHOLD)
        renderWithReactRouter("/")
        const button = screen.getByRole('button', {name: /couple up/i});
        await userEvent.click(button);
        const signUpPage = screen.getByRole("heading", {name: /sign up/i})
        expect(signUpPage).toBeInTheDocument()
    });

    it('should show popup window if screen is bigger than SCREEN_THRESHOLD', async () => {
        resizeWindow(SCREEN_THRESHOLD + 1)
        const {user, elements: {button}} = renderComponent()
        await user.click(button)
        const modal = screen.getByRole('dialog');
        expect(modal).toBeInTheDocument()
    });


});