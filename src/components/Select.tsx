import { ChangeEvent } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 100%;
    padding: 1em 0;
    margin: 0 0 1em;
`;

type SelectProps = {
    children?: React.ReactNode;
    id?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ children, id, value, onChange }: SelectProps) {
    return (
        <StyledSelect id={id} value={value} onChange={onChange}>{children}</StyledSelect>
    );
}

export default Select;
