type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="btn py-2 px-4 bg-gray-300 inline-block rounded-lg"
        >
            {children}
        </button>
    )
}

export default Button;
