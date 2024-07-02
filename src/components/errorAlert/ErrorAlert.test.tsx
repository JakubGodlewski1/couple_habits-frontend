import {render, screen} from "@testing-library/react";
import ErrorAlert from "./index.tsx";
import {expect} from "vitest";

describe('ErrorAlert', () => {
    it('should render error if passed in props', () => {
        render(<ErrorAlert errorMessage={"error message"}/>)
        expect(screen.getByText(/error message/i)).toBeInTheDocument()
    });

    it('should not render at all if message not passed', () => {
        render(<ErrorAlert errorMessage={null}/>)
        const errorMessage = screen.queryByRole("error")
        expect(errorMessage).not.toBeInTheDocument();
    });
});