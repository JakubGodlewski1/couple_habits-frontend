const ErrorAlert = ({errorMessage}: { errorMessage: string | null }) => {

    if (!errorMessage)
        return


    return (
        <div role="error" className="bg-error p-2 rounded-lg text-gray-100">
            {errorMessage}
        </div>
    );
};

export default ErrorAlert;