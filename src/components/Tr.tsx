import styled from 'styled-components';

const StyledTr = styled.tr`
    td {
        background-color: rgba(176, 196, 222, 0.3);
    }

    td:first-child {
        color: #000000;
    }
`;

type TrProps = {
    children?: React.ReactNode;
}

function Tr({ children }: TrProps) {
    return (
        <StyledTr>{children}</StyledTr>
    );
}

export default Tr;
