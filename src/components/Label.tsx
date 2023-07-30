import styled from 'styled-components';

const StyledLabel = styled.label`
    float: left;
`;

type LabelProps = {
    htmlFor?: string;
}

function Label({ htmlFor }: LabelProps) {
    return (
        <StyledLabel htmlFor={htmlFor} />
    );
}

export default Label;
