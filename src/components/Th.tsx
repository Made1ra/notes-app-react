import styled from 'styled-components';

const StyledTh = styled.th`
    padding: 1.5em;
    width: fit-content;
`;

type ThProps = {
    children?: React.ReactNode;
}

function Th({ children }: ThProps) {
    return (
        <StyledTh>{children}</StyledTh>
    );
}

export default Th;
