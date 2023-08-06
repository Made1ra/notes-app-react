type ContentProps = {
    children?: React.ReactNode;
};

function Content({ children }: ContentProps) {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-sm shadow-md">
            {children}
        </div>
    );
}

export default Content;
