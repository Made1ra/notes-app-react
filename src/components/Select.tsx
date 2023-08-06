import { ChangeEvent } from 'react';

type SelectProps = {
    children?: React.ReactNode;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ children, id, value, onChange }: SelectProps) {
    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            className="w-full py-4 px-2 my-4 border border-neutral-950 rounded shadow-xl"
        >
            {children}
        </select>
    );
}

export default Select;
