import styled from 'styled-components';

const StyledTableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`;

type TableContainerProps = {
    children?: React.ReactNode;
};

function TableContainer({ children }: TableContainerProps) {
    return (
        <StyledTableContainer>{children}</StyledTableContainer>
    );
}

export default TableContainer;
