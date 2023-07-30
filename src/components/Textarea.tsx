import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 1em 0;
    margin: 0 0 1em;
`;

type TextareaProps = {
    id?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ id, required, value, onChange }: TextareaProps) {
    return (
        <StyledTextarea id={id} value={value} onChange={onChange} required={required} />
    );
}

export default Textarea;
