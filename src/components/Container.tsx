type ContainerProps = {
    children?: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <div className="w-full overflow-x-auto flex flex-col items-center">
            {children}
        </div>
    );
}

export default Container;
