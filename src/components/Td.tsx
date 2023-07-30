import styled from 'styled-components';

const StyledTd = styled.td`
    color: #808080;
    padding: 1em;
    word-wrap: normal;
`;

type TdProps = {
    children?: React.ReactNode;
}

function Td({ children }: TdProps) {
    return (
        <StyledTd>{children}</StyledTd>
    );
}

export default Td;
