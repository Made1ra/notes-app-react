type TdProps = {
    children?: React.ReactNode;
}

function Td({ children }: TdProps) {
    return (
        <td className="text-gray-500 p-4 first:text-black">
            {children}
        </td>
    );
}

export default Td;
