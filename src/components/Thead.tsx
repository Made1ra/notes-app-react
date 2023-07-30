import styled from 'styled-components';

const StyledThead = styled.thead`
    color: #ffffff;
    background-color: #808080;
    padding: 1em;
`;

type TheadProps = {
    children?: React.ReactNode;
}

function Thead({ children }: TheadProps) {
    return (
        <StyledThead>{children}</StyledThead>
    );
}

export default Thead;
