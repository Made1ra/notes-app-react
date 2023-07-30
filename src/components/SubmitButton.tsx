import styled from 'styled-components';

const StyledSubmitButton = styled.button`
    cursor: pointer;
    border: none;
    margin: 1em 0;
    padding: 1em;
    color: #ffffff;
    background-color: #00c853;
    font-weight: bold;
    float: left;

    &:hover {
        opacity: 0.9;
    }
`;

type SubmitButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

function SubmitButton({ children, onClick }: SubmitButtonProps) {
    return (
        <StyledSubmitButton onClick={onClick}>{children}</StyledSubmitButton>
    );
}

export default SubmitButton;
