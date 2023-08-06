type CancelButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

function CancelButton({ children, onClick }: CancelButtonProps) {
    return (
        <button
            onClick={onClick}
            className="btn mt-4 ml-1 p-4 text-white bg-red-600 float-left sm:ml-4"
        >
            {children}
        </button>
    );
}

export default CancelButton;
