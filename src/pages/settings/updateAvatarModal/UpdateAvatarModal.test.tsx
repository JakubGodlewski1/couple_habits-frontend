import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import UpdateAvatarModal from "./index.tsx";
import {userEvent} from "@testing-library/user-event";

describe('UpdateAvatarModal', () => {
    const renderComponent = () => {
        const user = userEvent.setup()
        render(<UpdateAvatarModal isOpen={true} onOpenChange={vi.fn()}/>)

        const header = screen.getByText(/update profile picture/i)
        const fileInput = screen.getByRole("file-upload")
        const closeButtons = screen.getAllByRole("button", {name: /close/i})
        const submitButton = screen.getByRole("button", {name: /upload avatar/i})

        return {elements: {header, fileInput, closeButtons, submitButton}, user}
    }

    it('should render all components', () => {
        const
            {
                elements:
                    {header, fileInput, closeButtons, submitButton}
            } = renderComponent()

        expect(header).toBeInTheDocument()
        expect(fileInput).toBeInTheDocument()
        expect(closeButtons.length).toBe(2)
        expect(submitButton).toBeInTheDocument()
    })

    it('should show error when passing to big a file or file with wrong extension. submit button should be disabled', async () => {

        const badFiles = [
            {
                file: new File([new Blob([new Uint8Array(2 * 1024 * 1024 + 1)])], 'large.jpg', {type: 'image/jpeg'}),
                errorMessage: "must be less than"
            },
            {
                file: new File([new Blob([new Uint8Array(2 * 1024 * 1024 + 1)])], 'large.png', {type: 'image/png'}),
                errorMessage: "must be less than"
            },
            {
                file: new File([new Blob([new Uint8Array(1024 * 1024)])], 'small.pdf', {type: 'application/pdf'}),
                errorMessage: "must be a "
            }


        ]

        const {user, elements: {fileInput, submitButton}} = renderComponent()
        for (const {file, errorMessage} of badFiles) {
            await user.upload(fileInput, file)
            expect(screen.getByText(new RegExp(errorMessage, "i"))).toBeInTheDocument()
            expect(submitButton).toBeDisabled()
        }
    })

    it('should show file name and submit btn should be enabled if passed file is ok', async () => {
        const {user, elements: {fileInput, submitButton}} = renderComponent()
        const goodFile = new File([new Blob([new Uint8Array(2 * 1024 * 1024)])], 'large.jpg', {type: 'image/jpeg'})
        expect(submitButton).toBeDisabled()
        await user.upload(fileInput, goodFile)
        expect(submitButton).not.toBeDisabled()
    });
});