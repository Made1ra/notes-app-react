type LabelProps = {
    htmlFor?: string;
}

function Label({ htmlFor }: LabelProps) {
    return (
        <label
            className="float-left"
            htmlFor={htmlFor}
        />
    );
}

export default Label;
