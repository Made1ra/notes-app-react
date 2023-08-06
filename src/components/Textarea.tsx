import { ChangeEvent } from 'react';

type TextareaProps = {
    id?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ id, required, value, onChange }: TextareaProps) {
    return (
        <textarea
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full py-4 px-2 my-4 border border-neutral-950 rounded shadow-xl"
        />
    );
}

export default Textarea;
