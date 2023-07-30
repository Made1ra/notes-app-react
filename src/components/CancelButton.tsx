import styled from 'styled-components';

const StyledCancelButton = styled.button`
    cursor: pointer;
    border: none;
    margin: 1em 1em 0;
    padding: 1em;
    color: #ffffff;
    background-color: #f44336;
    float: left;
    font-weight: bold;

    &:hover {
        opacity: 0.9;
    }

    @media screen and (max-width: 576px) {
        float: none;
        margin: 1em 0;
    }
`;

type CancelButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

function CancelButton({ children, onClick }: CancelButtonProps) {
    return (
        <StyledCancelButton onClick={onClick}>{children}</StyledCancelButton>
    );
}

export default CancelButton;
