import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    overflow-x: auto;
    max-width: 100%;
`;

type ContainerProps = {
    children?: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <StyledContainer>{children}</StyledContainer>
    );
}

export default Container;
