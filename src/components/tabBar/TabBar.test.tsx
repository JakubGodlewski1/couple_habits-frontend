import {screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import renderWithReactRouter from "../../tests/utils/renderWithReactRouter.tsx";
import {expect} from "vitest";

describe('TabBar', () => {
    const renderComponent = () => {
        renderWithReactRouter("/ideas")

        return {
            elements: {
                ideasLink: screen.getByRole("link", {name: /ideas/i}),
                dashboardLink: screen.getByRole("link", {name: /dashboard/i}),
                settingsLink: screen.getByRole("link", {name: /settings/i})
            },

            user: userEvent.setup()
        }
    }

    it('should render all tabs', () => {
        const {elements: {ideasLink, dashboardLink, settingsLink}} = renderComponent()

        expect(ideasLink).toBeInTheDocument
        expect(settingsLink).toBeInTheDocument()
        expect(dashboardLink).toBeInTheDocument()
    });

    it('should apply proper styles when link is active', async () => {
        const {elements: {ideasLink, dashboardLink}, user} = renderComponent()
        const classesWhenActive = "bg-[#EBF4CA] scale-110 shadow-xl font-medium"
        expect(ideasLink).toHaveClass(classesWhenActive)
        await user.click(dashboardLink)
        expect(ideasLink).not.toHaveClass(classesWhenActive)
        expect(dashboardLink).toHaveClass(classesWhenActive)
    });
});