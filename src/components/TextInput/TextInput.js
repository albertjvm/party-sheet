import './TextInput.scss';

export const TextInput = ({
    type = "text",
    className,
    onChange,
    ...props
}) => {
    console.log(props)
    return (
        <div className={`TextInput ${className}`}>
            <input
                type={type}
                onChange={e => onChange(e.target.value)}
                onFocus={e => e.target.select()}
                {...props}
            />
        </div>
    );
};