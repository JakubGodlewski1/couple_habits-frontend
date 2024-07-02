import {screen} from "@testing-library/react";
import renderWithReactRouter from "../../tests/utils/renderWithReactRouter.tsx";
import {expect} from "vitest";

describe('settings', () => {
    it('should render 2 buttons', () => {
        renderWithReactRouter("/settings")
        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(2);
    })
});