import {render, screen} from "@testing-library/react";
import Ideas from "./index.tsx";

describe('ideas', () => {
    it('renders ideas', () => {
        render(<Ideas/>)
        const ideas = screen.getAllByRole("idea")
        expect(ideas.length).toBeGreaterThan(1)
    })
});