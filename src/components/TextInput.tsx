import { ChangeEvent } from 'react';

type TextInputProps = {
    value: string;
    required: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ value, required, onChange }: TextInputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            required={required}
            className="w-full py-4 px-2 my-4 border border-neutral-950 rounded shadow-xl"
        />
    );
}

export default TextInput;
