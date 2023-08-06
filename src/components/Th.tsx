type ThProps = {
    children?: React.ReactNode;
}

function Th({ children }: ThProps) {
    return (
        <th className="p-6 w-min">
            {children}
        </th>
    );
}

export default Th;
