type HeadingProps = {
    children?: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
    return (
        <h2 className="mx-4 mb-4 text-black font-bold">
            {children}
        </h2>
    );
}

export default Heading;
