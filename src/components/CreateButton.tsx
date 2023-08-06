type CreateButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
};

function CreateButton({ children, onClick }: CreateButtonProps) {
    return (
        <button
            onClick={onClick}
            className="btn my-2 mx-2 mb-8 p-4 bg-gray-300"
        >
            {children}
        </button>
    );
}

export default CreateButton;
