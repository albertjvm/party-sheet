import './TextInput.scss';

export const TextInput = ({
    type = "text",
    className,
    onChange,
    ...props
}) => {
    return (
        <div className={`TextInput ${className}`}>
            <input
                type={type}
                onChange={e => onChange(e.target.value)}
                {...props}
            />
        </div>
    );
};