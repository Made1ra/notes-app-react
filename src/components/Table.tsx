type TableProps = {
    children?: React.ReactNode;
};

function Table({ children }: TableProps) {
    return (
        <table className="text-center m-1 border-collapse">
            {children}
        </table>
    );
}

export default Table;
