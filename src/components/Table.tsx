import styled from 'styled-components';

const StyledTable = styled.table`
    text-align: center;
    margin: 1em;
    border-collapse: collapse;

    @media screen and (max-width: 768px) {
        width: max-content;
        margin: 0;
    }
`;

type TableProps = {
    children?: React.ReactNode;
};

function Table({ children }: TableProps) {
    return (
        <StyledTable>{children}</StyledTable>
    );
}

export default Table;
