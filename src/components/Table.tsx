import styled from 'styled-components';

const StyledTable = styled.table`
    text-align: center;
    width: fit-content;
    margin: 1em;
    border-collapse: collapse;
    table-layout: fixed;
    overflow-x: auto;
    
    @media screen and (max-width: 576px) {
        width: 100vw;
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
