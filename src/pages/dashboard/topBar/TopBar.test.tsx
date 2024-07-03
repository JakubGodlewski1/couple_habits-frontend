import {render, screen} from "@testing-library/react";
import TopBar from "./index.tsx";
import {expect} from "vitest";
import {userEvent} from "@testing-library/user-event";

describe('topbar', () => {
    it('should render strike and + button', () => {
        render(<TopBar/>)
        const strike = screen.getByText(/day/i)
        const button = screen.getByRole("button", {name: /add/i})

        expect(strike).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    });

    it('should render modal "Add habit"', async () => {
        const user = userEvent.setup()
        render(<TopBar/>)
        const button = screen.getByRole("button", {name: /add/i})
        await user.click(button)
        const modalHeading = screen.getByRole("banner", {name: /create/i})
        expect(modalHeading).toBeInTheDocument()
    });
});