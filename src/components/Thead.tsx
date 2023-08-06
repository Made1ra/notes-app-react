type TheadProps = {
    children?: React.ReactNode;
}

function Thead({ children }: TheadProps) {
    return (
        <thead className="text-white bg-gray-600 p-4">
            {children}
        </thead>
    );
}

export default Thead;
