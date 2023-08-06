type SubmitButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

function SubmitButton({ children, onClick }: SubmitButtonProps) {
    return (
        <button
            onClick={onClick}
            className="btn mt-4 p-4 text-white bg-green-600 float-left"
        >
            {children}
        </button>
    );
}

export default SubmitButton;
