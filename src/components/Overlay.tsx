type OverlayProps = {
    children?: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 text-center">
            {children}
        </div>
    );
}

export default Overlay;
