type TableContainerProps = {
    children?: React.ReactNode;
};

function TableContainer({ children }: TableContainerProps) {
    return (
        <div className="w-full overflow-x-auto flex items-center justify-start lg:justify-center">
            {children}
        </div>
    );
}

export default TableContainer;
