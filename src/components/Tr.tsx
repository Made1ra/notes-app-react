type TrProps = {
    children?: React.ReactNode;
}

function Tr({ children }: TrProps) {
    return (
        <tr className="w-min bg-blue-300 bg-opacity-30">
            {children}
        </tr>
    );
}

export default Tr;
