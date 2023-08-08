type ButtonContainerProps = {
    children?: React.ReactNode;
};

function ButtonContainer({ children }: ButtonContainerProps) {
    return (
        <div className="mt-8 mb-4">
            {children}
        </div>
    );
}

export default ButtonContainer;
