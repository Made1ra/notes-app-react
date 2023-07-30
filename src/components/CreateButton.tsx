import styled from 'styled-components';

const StyledCreateButton = styled.button`
    cursor: pointer;
    border: none;
    margin: 0.5em 0.5em 2em;
    padding: 1em;
    background-color: #d3d3d3;
    font-weight: bold;
    
    &:hover {
        opacity: 0.9;
    }
`;

type CreateButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
};


function CreateButton({ children, onClick }: CreateButtonProps) {
    return (
        <StyledCreateButton onClick={onClick}>{children}</StyledCreateButton>
    );
}

export default CreateButton;
