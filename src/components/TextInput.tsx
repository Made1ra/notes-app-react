import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
    width: 100%;
    padding: 1em 0;
    margin: 0 0 1em;
`;

type TextInputProps = {
    value: string;
    required: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ value, required, onChange }: TextInputProps) {
    return (
        <StyledTextInput value={value} onChange={onChange} required={required} />
    );
}

export default TextInput;
