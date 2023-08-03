import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    padding: 0.5em;
    background-color: #d3d3d3;
    font-weight: bold;
    width: fit-content;

    &:hover {
        opacity: 0.9;
    }
`;

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
};


function Button({ children, onClick, disabled }: ButtonProps) {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default Button;
